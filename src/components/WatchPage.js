import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/sidenavSlice";
import { useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/constant";
import VideoDetail from "./VideoDetail";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParam] = useSearchParams();
  const searchVideoId = searchParam.get("v");

  const [videoInfo, setVideoInfo] = useState();
  const API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchVideoId}&key=${GOOGLE_API_KEY}`;

  const getVideos = async () => {
    const data = await fetch(API);
    const jsonData = await data.json();
    setVideoInfo(jsonData);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    getVideos();
  }, []);
  return (
    <div className="w-full flex flex-col">
      <div className="mt-20 p-4 flex">
        <div className="">
          <iframe
            width="1200"
            height="600"
            src={"https://www.youtube.com/embed/" + searchVideoId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <VideoDetail info={videoInfo} />
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/sidenavSlice";
import { useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/constant";
import VideoDetail from "./VideoDetail";
import CommentsContainer from "./CommentsContainer";

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
    <div className="flex flex-col">
      <div className="mt-20 p-4 w-[100vh] h-[70vh]">
        <div className="w-[100vh] h-[60vh]">
          <iframe
            width="100%"
            height="100%"
            src={"https://www.youtube.com/embed/" + searchVideoId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <VideoDetail info={videoInfo} />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;

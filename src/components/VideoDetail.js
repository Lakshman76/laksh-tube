import React, { useEffect, useState } from "react";
import {
  BiDislike,
  BiLike,
  PiShareFatLight,
  TfiDownload,
} from "./../utils/ReactIcons";

const VideoDetail = ({ info }) => {
  // const snippet = info?.items[0]?.snippet;
  // const title = snippet?.title;
  // const channelTitle = snippet?.channelTitle;

  const { items } = info || {};
  const { snippet, statistics } = items && items[0] ? items[0] : {};
  const { title, channelTitle } = snippet || {};
  const { likeCount } = statistics || {};

  const [subscribe, setSubscribe] = useState("Subscribe");
  const [handleSubscribe, setHandleSubscribe] = useState(false);
  const getSubscribe = () => {
    setSubscribe(handleSubscribe ? "Subscribe" : "🔔 Subscribed");
    setHandleSubscribe(!handleSubscribe);
  };

  const [totalLikeCount, setTotalLikeCount] = useState();

  useEffect(() => {
    setTotalLikeCount(parseInt(likeCount, 10));
  }, [likeCount]);

  const increaseLikeCount = () => {
    setTotalLikeCount((prevCount) => prevCount + 1);
  };
  const decreaseLikeCount = () => {
    setTotalLikeCount((prevCount) => prevCount - 1);
  };
  return (
    <div>
      <h3 className="font-semibold text-xl">{title}</h3>
      <div className="mt-5 flex justify-between items-center">
        <div className="flex justify-center items-center gap-10 ">
          <div className="flex gap-3">
            <img
              className="w-12 h-12 rounded-full"
              src="https://images.pexels.com/photos/298821/pexels-photo-298821.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="logo"
            />
            <span>
              <p>{channelTitle}</p>
              <p>1.9M Subscribers</p>
            </span>
          </div>
          <button
            onClick={getSubscribe}
            className={
              "px-6 py-3 text-white rounded-full hover:bg-transparent  " +
              (subscribe === "Subscribe"
                ? "bg-red-700 border-2 hover:text-red-700 hover:border-2 hover:border-red-700"
                : "bg-green-700 border-2 hover:text-green-700 hover:border-2 hover:border-green-700")
            }
          >
            {subscribe}
          </button>
        </div>
        <div className="flex gap-4 cursor-pointer">
          <div className="flex">
            <div
              className="px-6 py-2 flex justify-center items-center gap-2 border border-gray-400 rounded-l-full hover:bg-slate-200"
              onClick={increaseLikeCount}
            >
              <BiLike className="w-6 h-6" />
              <span>{isNaN(totalLikeCount) ? likeCount : totalLikeCount}</span>
            </div>
            <div
              className="px-6 py-2 flex justify-center items-center border border-gray-400 rounded-r-full hover:bg-slate-200"
              onClick={decreaseLikeCount}
            >
              <BiDislike className="w-6 h-6" />
            </div>
          </div>
          <div className="px-6 py-2 flex justify-center items-center gap-2 border border-gray-400 rounded-full hover:bg-slate-200">
            <PiShareFatLight className="w-6 h-6" />
            Share
          </div>
          <div className="px-6 py-2 flex justify-center items-center gap-2 border border-gray-400 rounded-full hover:bg-slate-200">
            <TfiDownload className="w-6 h-6" />
            Download
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;

import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-72 shadow-lg rounded-lg">
      <img
        className="rounded-lg"
        src={thumbnails.medium.url}
        alt="thumbnails"
      />
      <div className="m-2">
        <h3 className="font-semibold">{title}</h3>
        <h5 className="text-slate-600">{channelTitle}</h5>
        <p className="text-slate-600">{statistics.viewCount} views</p>
      </div>
    </div>
  );
};

export default VideoCard;

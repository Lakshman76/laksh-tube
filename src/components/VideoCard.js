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
// Higher order component
export const AdVideoCard = ({info}) => {
  return (
    <div className="p-1 border border-red-800">
      <AdVideoCard info={info}/>
    </div>
  )
}

export default VideoCard;

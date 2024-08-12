import React from "react";

const VideoSearchListCard = ({
  title,
  channelTitle,
  description,
  thumbnail,
}) => {
  return (
    <div className="w-full flex items-center gap-5 mt-5">
      <img src={thumbnail} alt="thumbnail" />
      <div className="flex flex-col gap-3">
        <h2 className="font-semibold text-xl">{title}</h2>
        <div>
          <p>{channelTitle}</p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VideoSearchListCard;

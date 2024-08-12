import React from "react";
import { useSelector } from "react-redux";
import VideoSearchListCard from "./VideoSearchListCard";
import { Link } from "react-router-dom";

const VideoSearchList = () => {
  const videoList = useSelector((state) => state.video?.videoDetails);
  return (
    <div className="mt-20 ml-32">
      {videoList.map((video) => (
        <Link key={video.etag} to={"/watch?v=" + video.id.videoId}>
         <VideoSearchListCard
          
          title={video?.snippet?.title}
          channelTitle={video?.snippet?.channelTitle}
          description={video?.snippet?.description}
          thumbnail={video?.snippet?.thumbnails?.medium?.url}
        />
        </Link>
      ))}
    </div>
  );
};

export default VideoSearchList;

import React from "react";
import video1 from "../../assets/video/video1.mp4"

const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
        src={video1}
      ></video>
    </div>
  );
};

export default Video;

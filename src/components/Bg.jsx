import React from "react";
import video from "../video/avatarTrailer.mp4";

const bg = () => {
  return (
    <div>
      <video src={video} loop autoPlay muted></video>
    </div>
  );
};

export default bg;

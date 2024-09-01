import React, { useState } from "react";
import video from "./vid1.mp4";
import "./Page2.css";

const Page2 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleExploreMoreClick = () => {
    if (showVideo) {
      // If video is already visible, hide it
      setShowVideo(false);
      setIsPlaying(false);
    } else {
      // If video is not visible, show it
      setShowVideo(true);
      setIsPlaying(true);
    }
  };

  const handleVideoClick = () => {
    const videoElement = document.getElementById("video-element");
    if (videoElement.paused) {
      videoElement.play();
      setIsPlaying(true);
    } else {
      videoElement.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="fi">
      <h1 className="animated-heading"></h1>
      <p className="animated-text"></p>

      <button className="cta-button" onClick={handleExploreMoreClick}>
        {showVideo ? "Hide Video" : "Explore More"}
      </button>

      {/* Conditionally render the video */}
      {showVideo && (
        <div className="video-container">
          <video
            id="video-element"
            autoPlay
            loop
            muted
            src={video}
            className="video"
            controls
          ></video>
          <button className="play-pause-btn" onClick={handleVideoClick}>
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Page2;

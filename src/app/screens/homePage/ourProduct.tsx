import React, { useRef } from "react";

export default function OurProduct() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  return (
    <div className="ads-restaurant-framee">
      <video
        ref={videoRef}
        className={"ads-video"}
        autoPlay={true}
        loop
        muted
        playsInline
        data-video-media=""
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <source type="video/mp4" src="videos/ads.mp4" />
      </video>
    </div>
  );
}

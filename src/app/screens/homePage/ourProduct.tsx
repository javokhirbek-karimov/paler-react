import React from "react";

export default function OurProduct() {
  return (
    <div className="ads-restaurant-framee">
      <video
        className={"ads-video"}
        autoPlay={true}
        loop
        muted
        playsInline
        data-video-media=""
      >
        <source type="video/mp4" src="videos/ads.mp4" />
      </video>
    </div>
  );
}

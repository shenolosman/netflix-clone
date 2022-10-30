import React from "react";
import "./Watch.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackIcon />
        Home
      </div>
      <video src="https://joy.videvo.net/videvo_files/video/free/2012-09/large_watermarked/hd0456_preview.mp4" className="video" autoPlay progress controls></video>
    </div>
  );
}

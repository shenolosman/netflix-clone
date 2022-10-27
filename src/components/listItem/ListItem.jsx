import React, { useState } from "react";
import "./ListItem.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import "./ListItem.scss";
const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://joy.videvo.net/videvo_files/video/free/2012-09/large_watermarked/hd0456_preview.mp4";
  return (
    <div
      className="listItem"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
    >
      <img src="https://placeimg.com/640/480/tech/sepia" alt="" />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrowIcon className="icon"/>
              <AddIcon className="icon"/>
              <ThumbUpOffAltIcon className="icon"/>
              <ThumbDownOffAltIcon className="icon"/>
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem minus voluptates aspernatur, possimus voluptas
              doloribus sint magni hic sapiente inventore.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
      
    </div>
  );
};

export default ListItem;

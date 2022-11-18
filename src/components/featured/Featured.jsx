import React from "react";
import "./Featured.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="scifi">Sci-Fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="info">
        <img src="https://cdn1.ftimg.com/images/logos/big/en_US/matrix-logo.png" alt="" width="100%" />

        <span className="desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta dolorem aliquid ratione provident maiores, soluta
          molestiae blanditiis quaerat sequi perspiciatis voluptatum quia libero earum! Alias accusantium soluta nulla unde quam,
          quo veniam, magni minima ducimus numquam illo ipsam? Ipsam excepturi blanditiis eaque, corrupti veritatis sed esse odio
          aliquid?
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon /> <span>Play</span>
          </button>
          <button className="more">
            <HelpOutlineIcon /> <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import "./Featured.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import axios from "axios";
export default function Featured({ type ,setGenre}) {
  const [content, SetContent] = useState({});
  useEffect(() => {
    const getRandom = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzc4MjM5ZTIyNGYzZWUxMjM2MGQxYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODc5MjU0MCwiZXhwIjoxNjY5MjI0NTQwfQ.JPVi9owJfK4Km7JUy_2N93Oen9zFQk0KA_eVEpDorog",
          },
        });
        SetContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandom();
  }, [type]);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre" onChange={e=>setGenre(e.target.value)}>
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
        src={content.img}
        alt=""
      />
      <div className="info">
        <img src={content.imgTitle} alt="" width="100%" />

        <span className="desc">
          {content.desc}
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

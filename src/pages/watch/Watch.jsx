import React from "react";
import "./Watch.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useLocation } from "react-router-dom";
export default function Watch() {
  const location = useLocation();
  const movie = location.movie;
  // console.log(movie)
  return (
    <div className="watch">
      <Link to="/">
        <div className="back" >
          <ArrowBackIcon />
          Home
        </div>
      </Link>
      <video src={movie.video} className="video" autoPlay progress controls></video>
    </div>
  );
}

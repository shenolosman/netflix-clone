import React from "react";
import Navbar from "../components/navbar/Navbar";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <img src="https://www.fillmurray.com/200/300" alt="" width="100%" />
    </div>
  );
};

export default Home;

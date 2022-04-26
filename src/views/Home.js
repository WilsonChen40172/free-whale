import React from "react";
// import style from "./Home.module.scss";
import ImgWall from "../components/ImgWall";

const Home = () => {
  return (
    <div className="Home">
      <ImgWall></ImgWall>
      <div className="section">
        <div className="container">
          <p className="title py-2">About Me</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from "react";

const Home = () => {
  useEffect(() => {
    //did mount

    return () => {
      //will mount
    };
  }, []);

  return (
    <div className="Home">
      <div className="section">
        <div className="imgWall">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
      <div className="section">
        <div className="container">
          <p className="title py-2">標題</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

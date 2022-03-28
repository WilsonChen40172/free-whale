import React, { useState, useEffect } from "react";

const Home = () => {
  const [img, setImg] = useState(0);
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
          <p className="title py-2">標題{img}</p>
          <button className="button" onClick={() => setImg(1)}>setImg</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Counter } from "../features/counter/Counter";
import style from "./F2E.module.scss";
import { Link } from "react-router-dom";

const F2E = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    //did mount
    document.title = "F2E";
    return () => {
      //will mount
    };
  }, []);

  return (
    <div className="F2E flex-all-center vh-100">
      <div className="section">
        <div className="container">
          <div className="text-center">
            <p>hooks練習</p>
            <p>我是{number}</p>
            <Button onClick={() => setNumber(number + 1)}>+</Button>
            <Button onClick={() => setNumber(number - 1)}>-</Button>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <Counter />
        </div>
      </div>
      <div className="section">
        <p>css一行+一個div產生圖片</p>
        <div className="position-relative">
          <div className={style.element}></div>
        </div>
        <input type="hidden" value="https://pxl.netlify.app/" />
      </div>
      <div className="section">
        <p>leetCode練習區</p>
        <Link to={"/LeetCode"}>LeetCode</Link>
      </div>
    </div>
  );
};

export default F2E;

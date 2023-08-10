import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Counter } from "../features/counter/Counter";
import style from "./F2E.module.scss";
import { Link } from "react-router-dom";

const testClass = () => {
  class Car {
    constructor(carObject) {
      this.height = carObject.height;
      this.width = carObject.width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
    get stop() {
      return this.stopMethod();
    }
    stopMethod() {}
  }

  var p = new Car({ height: 10, width: 10 });
  console.log(p.area);
};

testClass();

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
    <div className={style.F2E+" flex-all-center vh-100"}>
      <div className={style.section} style={{ display: "none" }}>
        <div className="container">
          <div className="text-center">
            <p>hooks練習</p>
            <p>我是{number}</p>
            <Button onClick={() => setNumber(number + 1)}>+</Button>
            <Button onClick={() => setNumber(number - 1)}>-</Button>
          </div>
        </div>
      </div>
      <div className={style.section}>
        <div className="text-center p-4">
          <Link to={"/f2e/LeetCode/0"}>LeetCode</Link>
        </div>
      </div>
      <div className={style.section}>
        <div className="text-center p-4">
          <Link to={"/f2e/LeetCode/Map"}>Map</Link>
        </div>
      </div>
      <div className={style.section}>
        <div className="text-center p-4">
          <Link to={"/f2e/UserForm"}>User Form</Link>
        </div>
      </div>
      <div className={style.section} style={{ display: "none" }}>
        <div className="container">
          <Counter />
        </div>
      </div>
      <div className={style.section}>
        <div className="text-center p-4">
          <Link to={"/f2e/AudioEffects"}>Audio Effects</Link>
        </div>
      </div>
      <div className={style.section} style={{ display: "none" }}>
        <p>css一行+一個div產生圖片</p>
        <div className="position-relative">
          <div className={style.element}></div>
        </div>
        <input type="hidden" value="https://pxl.netlify.app/" />
      </div>
    </div>
  );
};

export default F2E;

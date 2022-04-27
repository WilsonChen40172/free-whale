import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Counter } from "../features/counter/Counter";
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
    <div className="F2E">
      <div className="section">
        <div className="container">
          <p>hooks練習</p>
          <p>我是{number}</p>
          <Button onClick={() => setNumber(number + 1)}>+</Button>
          <Button onClick={() => setNumber(number - 1)}>-</Button>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default F2E;

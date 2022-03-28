import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const F2E = () => {
  const [number, setNumber] = useState(0);
  
  useEffect(() => {
    //did mount
    return () => {
      //will mount
    };
  }, []);

  return (
    <div className="F2E">
      <div className="section">
        <p>hooks練習</p>
        <p>我是{number}</p>
        <Button onClick={() => setNumber(number + 1)}>+</Button>
        <Button onClick={() => setNumber(number - 1)}>-</Button>
      </div>
      <div className="section"></div>
    </div>
  );
};

export default F2E;

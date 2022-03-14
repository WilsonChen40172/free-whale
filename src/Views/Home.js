import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./Home.scss";
import Navbar from "../conponents/Navbar";

const Home = (props) => {
  const [number, setNumber] = useState(props.number);

  const valueMinus = () => {
    setNumber(number - 1);
  };

  useEffect(() => {
    //did mount
    
    return () => {
      //will mount
    };
  }, []);

  return (
    <div className="Home">
      <Navbar></Navbar>
      <div className="section">
          <p>我是{number}</p>
        <Button onClick={() => setNumber(number + 1)}>
          +
        </Button>
        <Button onClick={() => valueMinus()}>
          -
        </Button>
      </div>
      <div className="section"></div>
    </div>
  );
};

export default Home;

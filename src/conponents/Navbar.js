import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    //did mount
    console.log("use effect");
    return () => {
      //will mount
    };
  }, []);

  const notUseClick = () => {
    setCount(2);
  };

  return (
    <div className="navbar">
      <div className="dots">
        <FontAwesomeIcon icon={faList} className="cursor-pointer fs-3" />
      </div>
      <p onClick={notUseClick}>{count}</p>
    </div>
  );
};

export default Navbar;

import React from "react";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => { 
  return (
    <div className="navbar">
      <div className="dots">
        <FontAwesomeIcon icon={faList} className="cursor-pointer fs-3" />
      </div>
    </div>
  );
};

export default Navbar;

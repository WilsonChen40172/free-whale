import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  const [dotsStyle, setDotsStyle] = useState(faList);

  const headerFunction = () => {
    props.changeHeaderSwitch();
    // console.log(props.headerSwitch);
    if (props.headerSwitch) {
      setDotsStyle(faList);
    } else {
      setDotsStyle(faXmark);
    }
  };
  useEffect(() => {
    headerFunction();
  });

  return (
    <div className="navbar">
      {/* style={{ display: "none" }} */}
      <div className="dots" onClick={headerFunction}>
        <FontAwesomeIcon icon={dotsStyle} className="cursor-pointer fs-3" />
        {/* <button onClick={changeHeaderSwitch}>header switch</button> */}
      </div>
    </div>
  );
};

export default Navbar;

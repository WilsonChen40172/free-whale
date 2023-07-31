import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  headerSwitchChange,
  selectHeaderSwitch,
} from "../features/counter/counterSlice";

const Navbar = () => {
  const [dotsStyle, setDotsStyle] = useState(faList);

  const dispatch = useDispatch();

  const headerSwitch = useSelector(selectHeaderSwitch);
  // console.log(headerSwitch);

  const headerFunction = () => {
    // console.log(props.headerSwitch);
    if (headerSwitch) {
      setDotsStyle(faList);
    } else {
      setDotsStyle(faXmark);
    }
  };

  const location = useLocation();
  //網址更動
  useEffect(() => {
    setDotsStyle(faList);
  }, [location]);

  return (
    <div className="navbar">
      {/* style={{ display: "none" }} */}
      <div
        className="dots"
        onClick={() => dispatch(headerSwitchChange(), headerFunction())}
      >
        <FontAwesomeIcon icon={dotsStyle} className="cursor-pointer fs-3" />
        {/* <button onClick={changeHeaderSwitch}>header switch</button> */}
      </div>
    </div>
  );
};

export default Navbar;

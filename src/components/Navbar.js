import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [dotsStyle, setDotsStyle] = useState(faList);
  const openHeader = () => {
    // console.log("open");
    if (dotsStyle === faList) {
      setDotsStyle(faXmark);
    } else if (dotsStyle === faXmark) {
      setDotsStyle(faList);
    }
  };
  return (
    <div className="navbar">
      {/* style={{ display: "none" }} */}
      <div className="dots" onClick={openHeader}>
        <FontAwesomeIcon icon={dotsStyle} className="cursor-pointer fs-3" />
      </div>
    </div>
  );
};

export default Navbar;

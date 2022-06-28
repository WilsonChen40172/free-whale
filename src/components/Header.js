// import GlobalMethod from "../global/GlobalMethod";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [thisRoute, setThisRoute] = useState("");
  const location = useLocation();
  
  useEffect(() => {
    console.log("Location changed");
    setThisRoute(document.title);
  },[location]);

  return (
    <section className={style.header}>
      <div className={style.headerList}>
        <ul className="">
          <li className={(document.title === "Free Whale" ? " active" : "")}>
            <Link to={"/"}>Home</Link>
          </li>
          <li className={(document.title === "Stock" ? " active" : "")}>
            <Link to={"/stock"}>Stock</Link>
          </li>
          <li className={(document.title === "F2E" ? " active" : "")}>
            <Link to={"/F2E"}>F2E{thisRoute}</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;

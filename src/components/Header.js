// import GlobalMethod from "../global/GlobalMethod";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [thisRoute, setThisRoute] = useState("123");
  // const history = useHistory();
  const location = useLocation();
  // console.log(location);

  //網址更動
  useEffect(() => {
    setThisRoute(location.pathname);
  }, [location]);

  return (
    <section className={style.header}>
      <div className={style.headerList}>
        <ul className="">
          <li className={thisRoute === "/" ? style.active : ""}>
            <Link className={thisRoute === "/" ? " " : ""} to={"/"}>Home</Link>
          </li>
          <li className={thisRoute === "/stock" ? style.active : ""}>
            <Link to={"/stock"}>Stock</Link>
          </li>
          <li className={thisRoute === "/F2E" ? style.active : thisRoute==="/LeetCode" ? style.active : ""}>
            <Link to={"/F2E"} className={thisRoute === "/F2E" ? " " : ""}>F2E</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;

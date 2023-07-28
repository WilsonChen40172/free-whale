// import GlobalMethod from "../global/GlobalMethod";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import { useLocation } from "react-router-dom";

const Header = (props) => {
  const [thisRoute, setThisRoute] = useState("");
  // const history = useHistory();
  const location = useLocation();
  // console.log(location);

  //網址更動
  useEffect(() => {
    setThisRoute(location.pathname);
  }, [location]);

  const closeHeader = () =>{
    props.changeHeaderSwitch();
  }

  return (
    <section className={style.header + " " + (props.headerSwitch ? "" : style.active) }>
      {/* + " " + (props.headerSwitch.headerSwitch ? "" : style.active) */}
      <div className={style.headerList}>
        <ul className="" onClick={closeHeader}>
          <li className={thisRoute === "/" ? style.active : ""}>
            <Link className={thisRoute === "/" ? " " : ""} to={"/"}>
              Home
            </Link>
          </li>
          <li className={thisRoute === "/stock" ? style.active : ""}>
            <Link to={"/stock"}>Stock</Link>
          </li>
          <li
            className={
              thisRoute === "/F2E"
                ? style.active
                : thisRoute === "/LeetCode"
                ? style.active
                : ""
            }
          >
            <Link to={"/F2E"} className={thisRoute === "/F2E" ? " " : ""}>
              F2E
            </Link>
          </li>
          <li className={thisRoute === "/Classic" ? style.active : ""}>
            <Link
              to={"/Classic"}
              className={thisRoute === "/Classic" ? " " : ""}
            >
              Classic
            </Link>
          </li>
        </ul>
        {/* <select
          name=""
          id=""
          className={
            "text-right form-select position-absolute "  + style.languageSelect
          }
        >
          <option value="0">English</option>
          <option value="1">中文</option>
        </select> */}
      </div>
    </section>
  );
};

export default Header;

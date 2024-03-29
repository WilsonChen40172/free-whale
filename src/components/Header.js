import GlobalMethod from "../global/GlobalMethod";
import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  headerSwitchChange,
  selectHeaderSwitch,
} from "../features/counter/counterSlice";
// import axios from "axios";

const Header = () => {
  const [thisRoute, setThisRoute] = useState("");
  // api testing
  // const [employee, setEmployee] = useState([]);
  // const [error, setError] = useState(null);
  // const history = useHistory();
  const location = useLocation();
  // console.log(location);

  //網址更動
  useEffect(() => {
    setThisRoute(location.pathname);
  }, [location]);

  const headerSwitch = useSelector(selectHeaderSwitch);
  const dispatch = useDispatch();
  // const baseURL = "http://localhost:3000/employee";

  useEffect(() => {
    // api testing
    // const getEmployee = async () => {
    //   try {
    //     const result = await axios.get(baseURL);
    //     setEmployee(result.data);
    //   } catch (error) {
    //     setError(error);
    //     if (error) return `Error: ${error.message}`;
    //   }
    // };
    // getEmployee();
    // console.log(employee);
  }, []);

  // const listItems = employee.map((employeeData) => (
  //   <p key={employeeData["id"]}>{employeeData["name"]}</p>
  // ));

  // useMemo -> list就不會每次重刷都重新render一次頁面
  const randomNumUseMemo = useMemo(() => {
    return <>{GlobalMethod.getRandomRun(100, 300)}</>;
  }, []);

  return (
    <section
      className={style.header + " " + (headerSwitch ? style.active : "")}
    >
      {/* + " " + (props.headerSwitch.headerSwitch ? "" : style.active) */}
      <div className={style.headerList}>
        <ul className="">
          <li className={thisRoute === "/" ? style.active : ""}>
            <Link
              className={thisRoute === "/" ? " " : ""}
              to={"/"}
              onClick={() => dispatch(headerSwitchChange())}
            >
              Home
            </Link>
          </li>
          <li className={thisRoute === "/stock" ? style.active : ""}>
            <Link to={"/stock"} onClick={() => dispatch(headerSwitchChange())}>
              Stock
            </Link>
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
            <Link
              to={"/F2E"}
              className={thisRoute === "/F2E" ? " " : ""}
              onClick={() => dispatch(headerSwitchChange())}
            >
              F2E
            </Link>
          </li>
          <li className={thisRoute === "/Classic" ? style.active : ""}>
            <Link
              to={"/Classic"}
              className={thisRoute === "/Classic" ? " " : ""}
              onClick={() => dispatch(headerSwitchChange())}
            >
              Classic
            </Link>
          </li>
          <li>
            <Link
              to={"/CodeNote"}
              className={thisRoute === "/CodeNote" ? " " : ""}
              onClick={() => dispatch(headerSwitchChange())}
            >
              {/* 測試全域用function */}
              {"CodeNote:"}
              {randomNumUseMemo}
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

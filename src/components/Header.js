import logo from "../images/free_whale_logo.jpeg";
// import GlobalMethod from "../global/GlobalMethod";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";
const Header = () => {
  return (
    <section className={style.header}>
      <div className={style.headerList}>
        <ul className="">
          {/* <li className={style.logo}>
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
          </li> */}
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/stock"}>Stock</Link>
          </li>
          <li>
            <Link to={"/F2E"}>F2E</Link>
          </li>

          <li>{/* <a href="/">舞蹈</a> */}</li>
          <li>{/* <a href="/">健身</a> */}</li>
          <li>{/* <a href="/">滑板</a> */}</li>
        </ul>
      </div>
    </section>
  );
};

export default Header;

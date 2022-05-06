// import GlobalMethod from "../global/GlobalMethod";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";
const Header = () => {
  return (
    <section className={style.header}>
      <div className={style.headerList}>
        <ul className="">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/stock"}>Stock</Link>
          </li>
          <li>
            <Link to={"/F2E"}>F2E</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;

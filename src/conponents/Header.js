import logo from "../images/logo.png";
// import GlobalMethod from "../global/GlobalMethod";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="container d-flex">
        <img src={logo} alt="" className="logo" />
        <ul className="d-flex justify-content-between align-items-center">
          <li>
            <Link to={"/"}>首頁</Link>
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
    </div>
  );
};

export default Header;

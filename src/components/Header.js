import logo from "../images/free_whale_logo.jpeg";
// import GlobalMethod from "../global/GlobalMethod";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="container d-flex">
        <Link to={"/"}>
          <img src={logo} alt="" className="logo" />
        </Link>
        <ul className="d-flex justify-content-between align-items-center">
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
    </div>
  );
};

export default Header;

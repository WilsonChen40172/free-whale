import logo from "../images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="container d-flex">
        <img src={logo} alt="" className="logo" />
        <ul className="d-flex justify-content-between align-items-center">
          <li>
            <a href="/">首頁</a>
          </li>
          <li>
            <a href="/">F2E</a>
          </li>
          <li>
            <a href="/stock">股票</a>
          </li>
          <li>
            <a href="/">舞蹈</a>
          </li>
          <li>
            <a href="/">健身</a>
          </li>
          <li>
            <a href="/">滑板</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

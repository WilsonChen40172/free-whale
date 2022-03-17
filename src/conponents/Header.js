import logo from "../images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="container d-flex">
        <img src={logo} alt="" className="logo" />
        <ul className="d-flex justify-content-between align-items-center">
          <li>首頁</li>
          <li>F2E</li>
          <li>股票</li>
          <li>舞蹈</li>
          <li>健身</li>
          <li>滑板</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

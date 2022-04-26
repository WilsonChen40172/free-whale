// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
// import GlobalMethod from "../global/GlobalMethod";
import Home from "../Views/Home";
import Stock from "../Views/Stock";
import F2E from "../Views/F2E";
import NotFound from "../Views/NotFound";
import Header from "../conponents/Header";
import Navbar from "../conponents/Navbar";

function RouteSetting() {
  return (
    <HashRouter>
      <Navbar></Navbar>
      <Header></Header>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/stock"} element={<Stock />} />
        <Route path={"/f2e"} element={<F2E />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default RouteSetting;

// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
// import GlobalMethod from "../global/GlobalMethod";
import Home from "../views/Home";
import Stock from "../views/Stock";
import F2E from "../views/F2E";
import NotFound from "../views/NotFound";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

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

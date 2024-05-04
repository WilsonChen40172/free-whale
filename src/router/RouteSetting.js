// import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
// import GlobalMethod from "../global/GlobalMethod";
import Home from "../views/Home";
import Stock from "../views/Stock";
import F2E from "../views/F2E";
import NotFound from "../views/NotFound";
import LeetCode from "../views/LeetCode";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ReduxExample from "../ReduxExample";
import AudioEffects from "../views/AudioEffects";
import Map from "../views/Map";
import UseTypeMethod from "../views/UseTypeMethod";
import SimulateLight from "../views/SimulateLight";
import Classic from "../views/Classic";
import CodeNote from "../views/CodeNote";
import Traveler from "../views/Traveler";
import Dance from "../views/Dance";
import { Counter } from "../features/counter/Counter";

function RouteSetting() {
  const [headerSwitch, setHeaderSwitch] = useState(true);
  const changeHeaderSwitch = () => {
    const thisSwitchBoolean = headerSwitch;
    setHeaderSwitch(!thisSwitchBoolean);
    // console.log(headerSwitch);
  };
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      // 路由變更後立即將頁面滾動到頂部
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  return (
    <HashRouter>
      <Navbar
        changeHeaderSwitch={changeHeaderSwitch}
        headerSwitch={headerSwitch}
      ></Navbar>
      <Header
        changeHeaderSwitch={changeHeaderSwitch}
        headerSwitch={headerSwitch}
      ></Header>
      <ScrollToTop />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/stock"} element={<Stock />} />
        <Route path={"/f2e"} element={<F2E />} />
        <Route path={"*"} element={<NotFound />} />
        <Route path={"/f2e/LeetCode/:topicNumber"} element={<LeetCode />} />
        <Route path={"/f2e/Redux"} element={<ReduxExample />} />
        <Route path={"/f2e/AudioEffects"} element={<AudioEffects />} />
        <Route path={"/f2e/Map"} element={<Map />} />
        <Route path={"/f2e/UseTypeMethod"} element={<UseTypeMethod />} />
        <Route path={"/f2e/SimulateLight"} element={<SimulateLight />} />
        <Route path={"/Classic"} element={<Classic />} />
        <Route path={"/CodeNote"} element={<CodeNote />} />
        <Route path={"/Counter"} element={<Counter />} />
        <Route path={"/Traveler"} element={<Traveler />} />
        <Route path={"/Dance"} element={<Dance />} />

      </Routes>
    </HashRouter>
  );
}

export default RouteSetting;

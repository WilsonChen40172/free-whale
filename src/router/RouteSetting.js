// import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
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

function RouteSetting() {
  const [headerSwitch, setHeaderSwitch] = useState(true);
  const changeHeaderSwitch = () => {
    const thisSwitchBoolean = headerSwitch;
    setHeaderSwitch(!thisSwitchBoolean);
    // console.log(headerSwitch);
  };
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
      </Routes>
    </HashRouter>
  );
}

export default RouteSetting;

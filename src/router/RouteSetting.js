import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Stock from "../views/Stock";
import F2E from "../views/F2E";
import NotFound from "../views/NotFound";
import Header from '../conponents/Header';
import Navbar from '../conponents/Navbar';

function RouteSetting() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home number={0} />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/f2e" element={<F2E value={0} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSetting;

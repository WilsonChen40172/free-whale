import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Stock from "../views/Stock";
import NotFound from "../views/NotFound";

function RouteSetting() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home number={0} />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSetting;

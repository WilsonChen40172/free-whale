import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import NotFound from "../views/NotFound";

function RouteSetting() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home number={0} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSetting;

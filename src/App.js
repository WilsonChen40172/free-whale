import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import RouteSetting from "./router/RouteSetting";

const App = (store) => {
  console.log("store:" + store);
  return (
    <div className="App free-whale-background">
      <RouteSetting></RouteSetting>
    </div>
  );
};

export default App;

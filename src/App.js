import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from "./views/Home"
import RouteSetting from './router/RouteSetting';

const App = () => {

  return (
    <div className="App">
      <RouteSetting></RouteSetting>
    </div>
  );
}

export default App;

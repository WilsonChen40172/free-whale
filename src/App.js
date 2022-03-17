import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./conponents/Navbar"
import Header from "./conponents/Header"
import RouteSetting from './router/RouteSetting';

const App = () => {

  return (
    <div className="App free-whale-background">
      <Navbar></Navbar>
      <Header></Header>
      <RouteSetting></RouteSetting>
    </div>
  );
}

export default App;

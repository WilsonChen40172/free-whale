import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./views/Home"

const App = () => {

  return (
    <div className="App">
      <Home value={0}></Home>
    </div>
  );
}

export default App;

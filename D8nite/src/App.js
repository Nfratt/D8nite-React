import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Nav";
import Logo from "./Components/Logo";
import Restaurants from "./Components/Restaurants"

function App() {
  return (
    <div className="d8nite core">
      <Navbar />
      <br />
      <div id="page results" className="container">
        {/*     <section style="box-sizing: border-box; width:60%; float:left">  */}
        <Logo />
        <br />
        <div id="results rest" className="row">
          <Restaurants />
        </div>

      </div>
    </div>

  );
}

export default App;

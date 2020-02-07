import React from 'react';
import './App.css';
import Navbar from "./Components/Nav";
import Logo from "./Components/Logo";
import Restaurants from "./Components/Restaurants";
import Events from "./Components/Events";

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
        <br />
        <div id="page resultsEvents" className="row">
          <Events/>
        </div>
      </div>
    </div>

  );
}

export default App;

import React from 'react';
import './App.css';
import Navbar from "./Components/Nav";
import Logo from "./Components/Logo";
import Restaurants from "./Components/Restaurants";
import Events from "./Components/Events";
import Movies from "./Components/Movies"
import Forecast from "./Components/Forecast";

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
        <br/>
        <div id="resultsMovies" className="row">
          <Movies/>
          </div>
      </div>
      <aside className="weather">
        <Forecast/>
      </aside>
    </div>
  );
}

export default App;

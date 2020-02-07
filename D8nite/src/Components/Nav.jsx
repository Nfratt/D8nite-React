import React from "react";


export default function Navbar(props) {
  return (
    <div id="page-header">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="index.html">D8nite</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

          <ul className="navbar-nav ml-auto">
            <li id="nava" className="nav-item">
              <a id="nava" className="nav-link" href="index.html">Get Started</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )

}
import React from "react";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./AboutPage/About";
import Downtown from "./DownTown/Downtown";

import Home from "./HomePage/Home";
import Portfolio from "./PortfolioPage/Portfolio";
import Servives from "./ServicesPage/Servives";
import Thetwo from "./Thetwo";

const App = () => {
  return (
    <div >
  <Thetwo/>
      <Home />
      <Servives />
      <About />
     <Portfolio /> 
  <Downtown/>
    </div>
  );
};

export default App;

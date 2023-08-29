import React, { useState, useEffect } from "react";
//import "./App.css";
import "./styles/scss/App.scss";
import Display from "./Components/Display";
//import FloatingMenu from "./Components/FloatingMenu";
import ConstructionBanner from "./Components/ConstructionBanner";
import '@fortawesome/fontawesome-free/css/all.min.css';
import SideMenu from "./Components/SideMenu";



function App() {
  return (
    <div className="App">
      <SideMenu />
      <Display />
      <ConstructionBanner />
    </div>
  );
}

export default App


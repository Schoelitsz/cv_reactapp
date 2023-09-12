//import React, { useState, useEffect } from "react";
import "./styles/scss/App.scss";
import Display from "./Components/Display";
import ConstructionBanner from "./Components/ConstructionBanner";
import '@fortawesome/fontawesome-free/css/all.min.css';
import SideMenu from "./Components/SideMenu";
import './styles/scss/general.scss';
import SocialMediaBar from "./Components/NavBar";



function App() {
  return (
    <div className="App">
      <SocialMediaBar/>
      <SideMenu />
      <Display />
      <ConstructionBanner />
    </div>
  );
}

export default App


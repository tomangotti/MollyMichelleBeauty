import { useState, useEffect } from "react";
import {HashRouter} from "react-router-dom"

import NavBar from "./components/Navbar";
import Contact from "./components/Contact";
import About from "./components/About";
import HairStyleContainer from "./components/HairStyleContainer";

function App() {
  

  return (
    <HashRouter>
      <NavBar />
      <About />
      <HairStyleContainer />
      <Contact />
    </HashRouter>
  );
}

export default App;
import { useState, useEffect } from "react";
import {HashRouter} from "react-router-dom"

import NavBar from "./components/Navbar";
import Contact from "./components/Contact";
import About from "./components/About";
import HairStyleContainer from "./components/HairStyleContainer";

function App() {
  const [admin, setAdmin] = useState(null)

  useEffect(() => {
    fetch('/admin')
    .then(r => {
      if (r.ok){
        r.json().then(user => setAdmin(user))
      }
    })
  }, [])

  return (
    <HashRouter>
      <NavBar admin={admin} setAdmin={setAdmin} />
      <About />
      <HairStyleContainer />
      <Contact />
    </HashRouter>
  );
}

export default App;
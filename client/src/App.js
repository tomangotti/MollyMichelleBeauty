import { useState, useEffect } from "react";
import {HashRouter} from "react-router-dom"
import { Route, Switch } from 'react-router-dom'

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
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/styles" >
          <HairStyleContainer />
        </Route>
        <Route path="/contact" >
          <Contact admin={admin} setAdmin={setAdmin} />
        </Route>
      </Switch>
      
    </HashRouter>
  );
}

export default App;
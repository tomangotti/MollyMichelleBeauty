import { useState } from "react"
import { NavLink, Link } from "react-router-dom"



function NavBar(){
    

    

    return(
    <>
    <div className="navbar">
        <h1>Molly Michelle Beauty</h1>
    </div>
    <NavLink to="/about"></NavLink>
    <div className="nav_buttons">
        <NavLink to="/about" style={{margin: "auto"}}><h3 className="button" >About</h3></NavLink>
        <NavLink to="/styles" style={{margin: "auto"}}><h3 className="button" >Hair Styles</h3></NavLink>
        <NavLink to="/contact" style={{margin: "auto"}}><h3 className="button" >Contact</h3></NavLink>
    </div>

    </>
    )
}

export default NavBar
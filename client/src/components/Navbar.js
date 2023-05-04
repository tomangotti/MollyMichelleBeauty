import { useState } from "react"


function NavBar({admin, setAdmin}){

    return(
    <>
    <div className="navbar">
        <h1> Molly Michelle Beauty</h1>
    </div>
    
    <div className="nav_buttons">
        <h3 className="button" >About</h3>
        <h3 className="button" >Hair Styles</h3>
        <h3 className="button" >Contact</h3>
    </div>

    
    </>
    )
}

export default NavBar
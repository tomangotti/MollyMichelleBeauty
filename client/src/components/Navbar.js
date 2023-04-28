import { useState } from "react"


function NavBar({admin, setAdmin}){
    
    function handleLogin(e){
        e.preventDefault()
        const info = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        console.log(info)
        fetch('/admin_login', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(info)
        })
        .then(r => {
            if(r.ok){
                r.json().then((user) => {
                    setAdmin(user)
                })
            }
        })
        e.target.reset()
    }

    return(
    <>
    <div className="navbar">
        <h1> Molly Michelle Beauty</h1>
    </div>
    <div className="nav_buttons">
        <h4>About</h4>
        <h4>Hair Styles</h4>
        {admin ? "logged in" : "not logged in"}
    </div>
    <div className="login">
        <form onSubmit={handleLogin}>
            <label>Email</label>
            <input type="text" name="email" /><br></br>
            <label>Password</label>
            <input type="password" name="password" /><br></br>
            <button>Login</button>
        </form>
    </div>
    </>
    )
}

export default NavBar
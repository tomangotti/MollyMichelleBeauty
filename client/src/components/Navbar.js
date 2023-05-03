import { useState } from "react"


function NavBar({admin, setAdmin}){
    const[loginForm, setLoginForm] = useState(false)

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

    function handleClickLogin(){
        setLoginForm(!loginForm)
    }

    function handleLogOut(){
        fetch('/admin_logout',{
            method: "DELETE",
        })
        .then(r => {
            if(r.ok){
                r.json().then(
                    setAdmin(null)
                )
            }
        })

    }

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
    
    <div className="login">
        <h5 onClick={handleClickLogin}>Admin Login</h5>
        {loginForm ? <div className="login_form">
            <form onSubmit={handleLogin}>
                <label>Email </label>
                <input type="text" name="email" /><br></br>
                <label>Password </label>
                <input type="password" name="password" /><br></br>
                <h6>{admin ? "Admin logged in" : null}</h6>
                {admin ? null : <button>Login</button>}
            </form>
            {admin ? <button onClick={handleLogOut}>Log Out</button> : null}
        </div> : null }
    </div>
    </>
    )
}

export default NavBar
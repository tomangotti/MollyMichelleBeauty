import { useState } from "react";
import {useHistory} from "react-router-dom"

function AdminLogin({admin, setAdmin}){
    const history = useHistory();
    const [errors, setErrors] = useState([])


    function handleLogin(e){
        e.preventDefault()
        const info = {
            email: e.target.email.value,
            password: e.target.password.value,
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
                    history.push("/admin_page")
                })
            }else{
                r.json().then(err => {
                    setErrors(err.errors)
                })
            }
            e.target.reset()
        })
        

        
    }

    const errorHandling = errors.map((error, index) => {
        return (<h5 style={{color: "red", backgroundColor: "white"}} key={index}>{error}!</h5>)
    })


    return(
        <div className="login_form">
            <form onSubmit={handleLogin}>
                <label>Email:  </label>
                <input type="string" name="email" /><br></br>
                <label>Password:  </label>
                <input type="password" name="password" /><br></br>
                <h6>{admin ? "Admin logged in" : null}</h6>
                <button>Login</button>
            </form>
            {errors ? errorHandling : null}
        </div>
    )
}

export default AdminLogin
import { useState } from "react";
import {useHistory} from "react-router-dom"

function AdminLogin({admin, setAdmin}){
    const history = useHistory();
    const [errors, setErrors] = useState([])


    function handleLogin(e){
        e.preventDefault()
        const info = {
            first_name: e.target.fname.value,
            last_name: e.target.lname.value,
            email: e.target.email.value,
            password: e.target.password.value,
            password_confirmation: e.target.password_confirmation.value,
        }

        console.log(info)
        fetch('/admins', {
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
                <label>First:  </label>
                <input type="text" name="fname" /><br></br>
                <label>Last:  </label>
                <input type="text" name="lname" /><br></br>
                <label>Email:  </label>
                <input type="text" name="email" /><br></br>
                <label>Password:  </label>
                <input type="password" name="password" /><br></br>
                <label>Password confirm:  </label>
                <input type="password" name="password_confirmation" /><br></br>
                <h6>{admin ? "Admin logged in" : null}</h6>
                <button>Login</button>
            </form>
            {errors ? errorHandling : null}
        </div>
    )
}

export default AdminLogin
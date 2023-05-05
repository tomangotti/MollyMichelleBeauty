import {useHistory} from "react-router-dom"

function AdminLogin({admin, setAdmin}){
    const history = useHistory();


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
                    history.push("/admin_page")
                })
            }
        })
        e.target.reset()

        
    }




    return(
        <div className="login_form">
            <form onSubmit={handleLogin}>
                <label>Email:  </label>
                <input type="text" name="email" /><br></br>
                <label>Password:  </label>
                <input type="password" name="password" /><br></br>
                <h6>{admin ? "Admin logged in" : null}</h6>
                <button>Login</button>
            </form>
        </div>
    )
}

export default AdminLogin
import { useEffect, useState } from "react";
import {useHistory} from "react-router-dom"


function AdminPage({admin, setAdmin}) {
    const history = useHistory();
    const [about, setAbout] = useState(null)

    useEffect(() => {
        fetch('/abouts')
        .then((r) =>{
            if(r.ok){
                r.json().then((data) => {
                    setAbout(data[0])
                })
            }
        })
    },[])

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
        history.push("/admin_login")

    }

    function handleAboutUpdate(e) {
        e.preventDefault();

        const updateAbout = {
            bio: e.target.bio.value,
        }

        fetch(`/abouts/${about.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updateAbout)
        })
        .then((r) => {
            if(r.ok){
                r.json().then((data) => {
                    console.log(data)
                })
            }
        })
    }
    
    if(admin === null){
        return (<h1>Please Log In</h1>)
    }

    return (
    <>
    <h1>Welcome to the ADMIN PAGE</h1>
    <button onClick={handleLogOut}>Logout</button>
        {about ? <div className="editAboutForm">
            <h2>Edit Bio and Image</h2>
            <form onSubmit={handleAboutUpdate}>
                <label>Bio: </label>
                <textarea type="string" name="bio" defaultValue={about.bio} rows="10" cols="40"/>
                <br></br><button>Save</button>
            </form>
        </div> : null }
    </>
    )
}

export default AdminPage
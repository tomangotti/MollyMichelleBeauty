import { useEffect, useState } from "react";
import {useHistory} from "react-router-dom"
import HairStyleEditForm from "./HairStyleEditForm";


function AdminPage({admin, setAdmin}) {
    const history = useHistory();
    const [about, setAbout] = useState(null)
    const [hairStyles, setHairStyles] = useState(null)

    useEffect(() => {
        fetch('/abouts')
        .then((r) =>{
            if(r.ok){
                r.json().then((data) => {
                    setAbout(data[0])
                })
            }
        })

        fetch('/hair_styles')
        .then((r) => {
            if(r.ok){
                r.json().then((data) => {
                    setHairStyles(data)
                })
            }
        })
    },[])

    if(hairStyles === null){
        return(<div className="loader"></div>)
    }

    const hairStyleEditCard = hairStyles.map((hairStyle) => {
        return <HairStyleEditForm key={hairStyle.id} hairStyle={hairStyle} removeHairStyle={removeHairStyle} />
    })

    function removeHairStyle(id){
        const filteredList = hairStyles.filter((hairStyle) => {
            return hairStyle.id !== id
        })
        setHairStyles(filteredList)
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

    function handleNewStyle(e){
        e.preventDefault()

        const newHairStyle = {
            name: e.target.name.value,
            price: e.target.price.value,
            length: e.target.length.value,
            description: e.target.description.value
        }

        fetch('hair_styles', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newHairStyle)
        })
        .then((r) => {
            if(r.ok){
                r.json().then((data) => {
                    setHairStyles([...hairStyles, data])
                    e.target.reset()
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
    <h2 style={{backgroundColor: "white", textAlign: "center"}}>Edit Bio and Image</h2>
        {about ? <div className="editAboutForm">
            
            <form onSubmit={handleAboutUpdate}>
                <label>Bio: </label><br></br>
                <textarea type="string" name="bio" defaultValue={about.bio} rows="10" cols="50"/>
                <br></br><button>Save</button>
            </form>
        </div> : null }
    <h2 style={{backgroundColor: "white", textAlign: "center"}}>Edit Hair Styles</h2>
    {hairStyleEditCard}
    <h2 style={{backgroundColor: "white", textAlign: "center"}}>Add Hair Styles</h2>
    <div className="addNewStyleForm">
        <form onSubmit={handleNewStyle}>
            <label>Name: </label>
            <input name="name" type="string" /><br></br>
            <label>Price: $ </label>
            <input name="price" type="number" /><br></br>
            <label>Length: </label>
            <input name="length" type="string" /><br></br>
            <label>Description: </label><br></br>
            <textarea type="string" name="description" rows="10" cols="50"/><br></br>
            <button>Add New Style</button>
        </form>
    </div>
    </>
    )
}

export default AdminPage
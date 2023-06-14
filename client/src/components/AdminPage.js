import { useEffect, useState } from "react";
import {useHistory} from "react-router-dom"
import HairStyleEditForm from "./HairStyleEditForm";
import ReviewPosts from "./ReviewPosts";


function AdminPage({admin, setAdmin}) {
    const history = useHistory();
    const [about, setAbout] = useState(null)
    const [hairStyles, setHairStyles] = useState(null)
    const [photo, setPhoto] = useState(null)
    const [image, setImage] = useState(null)
    const [hairPhoto, setHairPhoto] = useState(null)

    useEffect(() => {
        fetch('/abouts')
        .then((r) =>{
            if(r.ok){
                r.json().then((data) => {
                    setAbout(data)
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

        fetch('/profile_images/1')
        .then((r) => {
            if(r.ok){
                r.json().then((photo) => {
                    setImage(photo.photo)
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

        if(e.target.photo.value){
            const formData = new FormData()
            formData.append("photo", photo)
            fetch(`/profile_images`,{
                method: "POST",
                body: formData
            }).then(r=>r.json().then((data)=>{
                console.log(data)
                setImage(data.photo)
                alert('Profile image updated')
            }))
        }
        
        console.log(updateAbout)
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

        const formData = new FormData()
            formData.append("photo", hairPhoto)
            formData.append("name", e.target.name.value)
            formData.append("price", e.target.price.value)
            formData.append("length", e.target.length.value)
            formData.append("description", e.target.description.value)

        

        fetch('hair_styles', {
            method: "POST",
            body: formData
        })
        .then((r) => {
            if(r.ok){
                r.json().then((data) => {
                    setHairStyles([...hairStyles, data])
                    e.target.reset()
                    alert('new hair style added!')
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
        <div className="editAboutForm">
            <form onSubmit={handleAboutUpdate}>
                <label>Profile Image: </label>
                <img src={image} />
                <input type="file" onChange={(e) => setPhoto(e.target.files[0])} accept="photo/*" placeholder="Photo" className="file-input file-input-bordered w-full max-w-xs" name="photo"/><br></br>
                <label>Bio: </label><br></br>
                <textarea type="string" name="bio" defaultValue={about ? about.bio : null} rows="10" cols="50"/>
                <br></br><button>Save</button>
            </form>
        </div>
    <h2 style={{backgroundColor: "white", textAlign: "center"}}>Edit Hair Styles</h2>
    {hairStyleEditCard}
    <h2 style={{backgroundColor: "white", textAlign: "center"}}>Add Hair Styles</h2>
    <div className="addNewStyleForm">
        <form onSubmit={handleNewStyle}>
            <label>Name: </label>
            <input name="name" type="string" /><br></br>
            <input type="file" onChange={(e) => setHairPhoto(e.target.files[0])} accept="photo/*" placeholder="Photo" className="file-input file-input-bordered w-full max-w-xs" name="photo"/><br></br>
            <label>Price: $ </label>
            <input name="price" type="number" /><br></br>
            <label>Length: </label>
            <input name="length" type="string" /><br></br>
            <label>Description: </label><br></br>
            <textarea type="string" name="description" rows="10" cols="50"/><br></br>
            <button>Add New Style</button>
        </form>
    </div>
    <h2 style={{backgroundColor: "white", textAlign: "center"}}>Review Posts</h2>
    <ReviewPosts />
    </>
    )
}

export default AdminPage
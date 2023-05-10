import { useState } from "react"



function HairStyleEditForm({hairStyle, removeHairStyle}) {
    const [photo, setPhoto] = useState(null)
    


    function handleUpdateStyle(e){
        e.preventDefault()
        const formData = new FormData()
        if(photo){
            formData.append("photo", photo)
        }
        formData.append("name", e.target.name.value)
        formData.append("price", e.target.price.value)
        formData.append("length", e.target.length.value)
        formData.append("description", e.target.description.value)
        
        const updatedStyle = {
            name: e.target.name.value,
            price: e.target.price.value,
            length: e.target.length.value,
            description: e.target.description.value
        }

        console.log(photo)
        fetch(`/hair_styles/${hairStyle.id}`, {
            method: "PATCH",
            body: formData
        })
        .then((r) => {
            if(r.ok){
                r.json().then((data) =>{
                    console.log(data)
                })
            }
        })
    }

    function handleDelete(){
        fetch(`/hair_styles/${hairStyle.id}`,{
            method: "DELETE"
        })
        removeHairStyle(hairStyle.id)
    }
    
    return (
        <>
            <div className="hairStyleEditForm">
                <form onSubmit={handleUpdateStyle}>
                    <label>Name: </label>
                    <input name="name"  type="string" defaultValue={hairStyle.name} /><br></br>
                    <label>Hair Style Image: </label>
                    <img src={hairStyle.photo} />
                    <input type="file" onChange={(e) => setPhoto(e.target.files[0])} accept="photo/*" placeholder="Photo" className="file-input file-input-bordered w-full max-w-xs" name="photo"/><br></br>
                    <label>Price: $ </label>
                    <input name="price"  type="number" defaultValue={hairStyle.price} /><br></br>
                    <label>Length: </label>
                    <input name="length"  type="string" defaultValue={hairStyle.length} /><br></br>
                    <label>Description: </label><br></br>
                    <textarea type="string"  name="description" defaultValue={hairStyle.description} rows="10" cols="50"/><br></br>
                    <button>Save</button>
                </form>
                <button style={{float: "right", marginTop: "-15px"}} onClick={handleDelete}>DELETE</button>
            </div>
        </>
    )
}

export default HairStyleEditForm



function HairStyleEditForm({hairStyle, removeHairStyle}) {

    function handleUpdateStyle(e){
        e.preventDefault()

        const updatedStyle = {
            name: e.target.name.value,
            price: e.target.price.value,
            length: e.target.length.value,
            description: e.target.description.value
        }

        
        fetch(`/hair_styles/${hairStyle.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedStyle)
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
                    <input name="name" type="string" defaultValue={hairStyle.name} /><br></br>
                    <label>Price: $ </label>
                    <input name="price" type="number" defaultValue={hairStyle.price} /><br></br>
                    <label>Length: </label>
                    <input name="length" type="string" defaultValue={hairStyle.length} /><br></br>
                    <label>Description: </label><br></br>
                    <textarea type="string" name="description" defaultValue={hairStyle.description} rows="10" cols="50"/><br></br>
                    <button>Save</button>
                </form>
                <button style={{float: "right", marginTop: "-15px"}} onClick={handleDelete}>DELETE</button>
            </div>
        </>
    )
}

export default HairStyleEditForm
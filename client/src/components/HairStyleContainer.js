import HairStyleCard from "./HairStyleCard"
import {useState, useRef} from 'react'
import { createContext } from "react"
export const AppContext = createContext(null)


function HairStyleContainer() {
    const [latestPost, setLatestPost] = useState(AppContext)
    // const [images, setImages] = useState([])
    // const imagesRef = useRef([])
    // const postToGet = useRef([1])

    // const handleUpload = (e) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append("post[title]", "Test");

    //     for (let i = 0; i < imagesRef.current.files.length; i++) {
    //         formData.append("post[images][]", imagesRef.current.files[i]);
    //     }
    //     console.log(formData)
    //     postData(formData);
    // }

    // const postData = (formData) => {

    //     console.log(formData)
    //     fetch('/posts', {
    //         method: "POST",
    //         body: formData,
    //     })
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data)
    //         getImages()
    //     })
    //     .catch((err) => console.log(err))
    // }

    // const getImages = () => {
    //     fetch(`/posts/${postToGet.current.value}`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data)
    //         setImages(data.images)
    //     })
    //     .catch((err) => console.log(err))
    // }

    return (
        <><h1>HAIR STYLES</h1>
        
        {/* <form>
            <input type="file" name="image" multiple ref={imagesRef} />
            <button type="button" onClick={handleUpload}>Submit</button>
        </form>

        <div>
            <input type="number" ref={postToGet} placeholder="ID to retrieve" />
            <button onClick={getImages}>Get Images</button>
        </div>
        
        <div>
            {images ? images.map((image, index) => (
                <img key={index} src={image} alt="uploaded" style={{width: "200px", height: "200px"}} />

            )) : null}
        </div> */}
        </>
    )
}

export default HairStyleContainer
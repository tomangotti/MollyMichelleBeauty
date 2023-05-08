import { useEffect,useState } from "react"


function About() {
    const [about, setAbout] = useState(null)
    const [image, setImage] = useState(null)
    useEffect(() => {
        fetch('/abouts')
        .then((r) => {
            if(r.ok){
                r.json().then((data) => {
                    setAbout(data[0])
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

    return (
        <div className="about">
            <img id="bio_pic" src={image} />
            {about ? <p id="bio">{about.bio}</p> : null}
        </div>
    )
}

export default About

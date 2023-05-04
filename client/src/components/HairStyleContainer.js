import HairStyleCard from "./HairStyleCard"
import {useState, useRef, useEffect} from 'react'
import { createContext } from "react"
export const AppContext = createContext(null)


function HairStyleContainer() {
    const [hairStyles, setHairStyles] = useState(null)

    useEffect(() => {
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
        return(<h1>loading...</h1>)
    }

    const hairStyleCards = hairStyles.map((hairStyle) => {
        console.log(hairStyle)
        return <HairStyleCard key={hairStyle.id} hairStyle={hairStyle}/>
    })

    return (
        <div className="hairStyle">
            <h1>HAIR STYLES</h1>
            <div className="hairStyleContainer">
                {hairStyles ? hairStyleCards : null}
            </div>
        
        </div>
    )
}

export default HairStyleContainer
import HairStyleCard from "./HairStyleCard"
import {useState, useRef} from 'react'
import { createContext } from "react"
export const AppContext = createContext(null)


function HairStyleContainer() {
    


    return (
        <div className="hairStyle">
            <h1>HAIR STYLES</h1>
            <HairStyleCard />
        
        </div>
    )
}

export default HairStyleContainer
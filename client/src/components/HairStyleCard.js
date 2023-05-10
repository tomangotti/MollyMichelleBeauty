import { useState } from "react";

function HairStyleCard({hairStyle}) {
    const [expanded, setExpanded] = useState(false);
    
    const handleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <div className="hairStyleCard">
                <h2>{hairStyle.name}</h2>
                <img src={hairStyle.photo}/>
                <h5>price: ${hairStyle.price}</h5>
                <h5>{hairStyle.length}</h5>
                <h5><a href="https://www.vagaro.com/colorbyhandm/book-now">BOOK NOW</a></h5>
                <div className={`paragraph-section ${expanded ? '' : 'collapsed'}`}>
                    <p>{hairStyle.description}</p>
                </div>
                <h6 onClick={handleExpand}>{ expanded ? 'Collapse' : 'Expand'}</h6>
            </div>
        </>
    )
}

export default HairStyleCard


function HairStyleCard({hairStyle}) {

    
    return (
        <>
            <div className="hairStyleCard">
                <h2>{hairStyle.name}</h2>
                <img src="https://i2.wp.com/www.hadviser.com/wp-content/uploads/2020/08/18-cute-long-boho-style-CCgr-3aJKmM.jpg?resize=1017%2C1326&ssl=1"/>
                <h6>price: ${hairStyle.price}</h6>
                <h6>{hairStyle.length}</h6>
                <h6><a href="https://l.instagram.com/?u=https%3A%2F%2Fwww.vagaro.com%2Fcolorbyhandm%2Fbook-now&e=AT3DJvnc1m7JgsBf9MGprDMuAJYGNTVNxGoLyM7s4eJMBvfafqlC2rwVeaPfOZvInPwFrPkPfh1U_MvcofZyAhUc6OQFod2jDK6AIWt10wKLAnCq">BOOK NOW</a></h6>
                <p>{hairStyle.description}</p>
            </div>
        </>
    )
}

export default HairStyleCard
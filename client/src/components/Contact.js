

function Contact(){
    return(
    <>
    <div className="contact-container">
        <table className="contact" >
            <tr>
                <td>Phone</td>
                <td>Email</td>
            </tr>
            <tr>
                <td>304-641-0696</td>
                <td>sample-email</td>
            </tr>
        </table>
        <table className="hours-days" >
            <tr>
                <td>Days</td>
                <td>Hours</td>
            </tr>
            <tr>
                <td>M-W-Th</td>
                <td>7am - 5pm</td>
            </tr>
        </table>
    </div>
    </>
    )
}

export default Contact
import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
    return (
        <div className="container">
            <Link className="btn-outline-bottom" to="/dashboard" style={{textDecoration:'none'}}> To the Dashboard</Link>

            <h1>Hello SoundBirds,<br></br> let’s stick together!</h1>
            {/* <div className="rectangle"> </div> */}
            <p>Soundbirds is a digital platform that connects people around the world accoding to their taste of music.</p>
            {/* <button><Link to="signup">Sign up</Link></button> */}

            <Link to="/signup"><button className="btn-filled">let's get started </button></Link>
        </div>
    )
}


export default LandingPage;
import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
    return (
        <div>
            <h1>Hello SoundBirds ♫, let’s stick together!</h1>
            <p>Soundbirds is a digital platform that connects people around the world accoding to their taste of music.</p>
            <button><Link to="signup">Sign up</Link></button>
        </div>
    )
}


export default LandingPage;
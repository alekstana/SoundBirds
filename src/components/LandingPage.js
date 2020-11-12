import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

function LandingPage(props) {
    return (
        <div className="container">

            <h1>Hello SoundBirds,<br></br> let’s stick together!</h1>
            {/* <div className="rectangle"> </div> */}
            <p>Soundbirds is a digital platform that connects people around the world according to their taste of music.</p>
            <p>Why? Because meeting someone with the same taste of music is seriously the best thing ever.</p>


            {
                        props.loggedInUser ? (
                            <Link className="btn-filled" to="/dashboard" style={{textDecoration:'none'}}> To the Dashboard</Link>
                        ) : (
                            <>
                            <Link to="/signup"><button className="btn-filled">Let's get Started</button></Link>
                            </>
                        )
                    }
        </div>
    )
}


export default LandingPage;
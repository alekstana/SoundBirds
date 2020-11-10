import React from 'react'
import { Link } from 'react-router-dom'




function MyNav(props) {


    
    return (
        <div className="nav">
        <div className="nav-container">

        
        <Link to="/">
        <img style={{height: "45px"}}src="/images/logo.svg"/>
        </Link>
                    <div className="nav-btn-container">

        {
                        props.loggedInUser ? (
                            <button onClick={props.onLogout} className="btn-outline">Logout</button>
                        ) : (
                            <>
                            <Link to="/signin"><button className="btn-outline">Sign In</button></Link>
                            <Link to="/signup"><button className="btn-outline">Sign Up</button></Link>
                            </>
                        )
                    }
                    </div>

            </div>
        </div>
    )
}


export default MyNav;
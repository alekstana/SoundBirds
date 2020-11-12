import React, { Component } from 'react'
import { Link ,  Redirect } from 'react-router-dom'


class Dashboard extends Component {
    render() {
       let { loggedInUser } = this.props

       if (!loggedInUser) {
        return <Redirect to={'/'}/>
       } 
        return (
            <div>
                <Link className="btn-outline-bottom" to="/edit-profile" style={{textDecoration:'none'}}> Edit profile</Link>
                <div>
                    <h2>Welcome to your dashboard, {loggedInUser.name}!</h2>
                    <p>More songs - more possibility to find a perfect match.</p>
                    <div style={{display: "flex", flexWrap: "wrap" , flexDirection: "row"}}>
                    <div className="mini-container">
                    <Link to="/myplaylist" className="btn-outline" style={{textDecoration:'none'}} >Show my playlist</Link>
                    </div>
                    <div className="mini-container">
                    <Link to="/create-playlist" className="btn-filled" style={{textDecoration:'none'}}>Create a playlist</Link>
                    </div>
                    <div className="mini-container">
                    <Link to="/find-soundbird" className="btn-filled" style={{textDecoration:'none'}}>Find your soundbirds</Link>
                    </div>
                    </div>
            </div>
            
            <div style={{ diplay:'flex', alignItems: "center", paddingTop: "30px", justifyContent:"center"}}>


            {
                loggedInUser.imageUrl ? (
                    <div className="image-container2">
                       <img className="image2" src={loggedInUser.imageUrl} alt="profile image"/>
                    </div>
                        ) : (
                    <object className="image-container2" data="/images/Avatar.jpg" type="image/png">
                                <img className="image" src={loggedInUser.imageUrl} alt="profile image"/>
                    </object>
                
                        )
                    }
            

        </div>

               

            </div>
        )
    }
}


export default Dashboard;
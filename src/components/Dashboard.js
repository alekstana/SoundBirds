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
                <h2>Welcome to your dashboard, {loggedInUser.name}!</h2>
                <p>More songs - more possibility to find a perfect match.</p>
                <Link to="/myplaylist" className="btn-outline" style={{textDecoration:'none'}} >Show my playlist</Link>
                <Link to="/create-playlist" className="btn-filled" style={{textDecoration:'none'}}>Create a playlist</Link>
                <Link to="/find-soundbird" className="btn-filled" style={{textDecoration:'none'}}>Find your soundbird</Link>


            </div>
        )
    }
}


export default Dashboard;
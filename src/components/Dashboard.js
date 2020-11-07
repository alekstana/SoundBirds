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
                <h1>Welcome to your dashboard, {loggedInUser.name}!</h1>
                <p>More songs - more possibility to find a perfect match.</p>
                <button><Link to="/create-playlist">Create a playlist</Link></button>
            </div>
        )
    }
}


export default Dashboard;
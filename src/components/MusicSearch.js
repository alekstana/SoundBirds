import React, { Component } from 'react'
import { Link ,  Redirect } from 'react-router-dom'
import ArtistDetail from './ArtistDetail' 


class MusicSearch extends Component {

  
    state = {
        myArtists: null,
      }


    render() {
       let { loggedInUser , onArtistSearch } = this.props

       if (!loggedInUser) {
        return <Redirect to={'/'}/>
       } 
       
        return (
            <div>
                <Link to='/dashboard'>To the Dashboard</Link>
                <h1>Find your favourite music, {loggedInUser.name}!</h1>
                <ArtistDetail onArtistSearch={onArtistSearch} loggedInUser={loggedInUser}/>
            </div>
        )
    }
}


export default MusicSearch;
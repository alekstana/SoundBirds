import React, { Component } from "react";
import { Link, Redirect, Switch, Route } from "react-router-dom";
import ArtistSearch from "./ArtistSearch";
import ArtistDetail from './ArtistDetail'

class CreatePlaylist extends Component {



  render() {
    let { loggedInUser, myArtists, onMusicSearch } = this.props;

    if (!loggedInUser) {
      return <Redirect to={"/"} />;
    }

    return (
      <div>
        <Link className="btn-outline-bottom" to="/dashboard" style={{textDecoration:'none'}}> To the Dashboard</Link>
        <h2>Find your favourite music, {loggedInUser.name}!</h2>
        <ArtistSearch onMusicSearch={onMusicSearch} loggedInUser={loggedInUser} myArtists={myArtists}/>
{/* 
        {myArtists.map((artist) => {
              return <ArtistDetail myArtists={artist} loggedInUser={loggedInUser}/> ;
            })} */}

      </div>
    );

  }
}

export default CreatePlaylist;

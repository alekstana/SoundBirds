import React, { Component } from "react";
import { Link, Redirect, Switch, Route } from "react-router-dom";
import ArtistSearch from "./ArtistSearch";
import TracksDetail from './TracksDetail'


class CreatePlaylist extends Component {

  

  componentDidMount() {
    this.props.onNullifyTracks();
  }

  render() {
    let { loggedInUser, myArtists, onMusicSearch, myTracks , onSelectTrack} = this.props;

    if (!loggedInUser) {
      return <Redirect to={"/"} />;
    }

    return (
      <div>
        <Link className="btn-outline-bottom" to="/dashboard" style={{textDecoration:'none'}}> To the Dashboard</Link>
        <h2>Find your favourite music, {loggedInUser.name}!</h2>
        <ArtistSearch onMusicSearch={onMusicSearch} loggedInUser={loggedInUser} myArtists={myArtists}/>
        
        <TracksDetail loggedInUser={loggedInUser} onSelectTrack={onSelectTrack} myTracks={myTracks}/>

      </div>
    );

  }
}

export default CreatePlaylist;

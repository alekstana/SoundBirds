import React, { Component } from "react";
import axios from 'axios'
import {API_URL} from '../config'
import { Link  } from 'react-router-dom'


class ShowPlaylist extends Component {

    state = {
         myPlaylist:[]
    }

 
  handleShowPlaylist = () => {
    axios
      .post(`${API_URL}/show-playlist`, {}, {withCredentials:true})
      .then((response) => {
        console.log(response);
        this.setState({
          myPlaylist: response.data
        });
      })
      .catch((err) => {
        console.log("couldn't fetch the playlist", err);
      });
  };

  componentDidMount() {
    this.handleShowPlaylist();
  }

  render() {
    const { myPlaylist } = this.state;
    console.log(myPlaylist);

    return (
      <div>
        <Link className="btn-outline-bottom" to="/dashboard" style={{textDecoration:'none'}}> To the Dashboard</Link>

        <h2>My Playlist</h2>
        <hr></hr>
        {myPlaylist &&
          myPlaylist.map((song) => {
            return (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p key={song.id}>
                  <h3>{song.name}</h3>
                  <p>{song.artist}</p>
                </p>

                <figure>
                    <figcaption></figcaption>
                    <audio controls src={song.sample}>
                      Your browser does not support the
                      <code>audio</code> element.
                    </audio>
                  </figure>


                {song.imageUrl.length ? (
                  <img
                    src={song.imageUrl}
                    style={{ width: "100px" }}
                  />
                ) : null}
                
              </div>
            );
          })}
              
      </div>
    );
  }
}

export default ShowPlaylist;

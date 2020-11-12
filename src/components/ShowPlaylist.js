import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../config";
import { Link } from "react-router-dom";

class ShowPlaylist extends Component {
  state = {
    myPlaylist: [],
    myProfile: null
  };

  handleShowPlaylist = () => {
    axios
      .post(`${API_URL}/show-playlist`, {}, { withCredentials: true })
      .then((response) => {
        console.log(response);
        this.setState({
          myPlaylist: response.data,
        });
      })
      .catch((err) => {
        console.log("couldn't fetch the playlist", err);
      });
  };

  handleDeleteSong = (songId) => {
      axios.post(`${API_URL}/delete-song`, {songId}, { withCredentials: true })
        .then((response) => {
          console.log("song deleted")
          console.log(response.data)
          this.setState({
            myPlaylist: response.data,
          });
        })
        .catch((err) => {
          console.log("could not delete song", err);
        });

  }


  componentDidMount() {
    this.handleShowPlaylist();
    this.setState({
      myProfile: this.props.loggedInUser
    })
  }



  render() {
    const { myPlaylist } = this.state;
    console.log(this.props.loggedInUser);

    return (
      <div>
      <div>
        <Link
          className="btn-outline-bottom"
          to="/dashboard"
          style={{ textDecoration: "none", marginBottom: "50px" }}
        >
        
          To the Dashboard
        </Link>
     </div>
     {/* {this.props.loggedInUser ?  (
      <div style={{height: "300px", overflow: "hidden", position: "relative",  display: "flex", alignContent: "center"}}>
       <img src={this.props.loggedInUser.imageUrl} style={{width: "100%", position: "absolute", marginTop: "-600px"}}/>

     </div>
     ) : null

     } */}

        <h2>My Playlist</h2>
        <hr></hr>
        {myPlaylist &&
          myPlaylist.map((song) => {
            return (
              <div style={{ display: "flex", flexDirection: "row", paddingBottom: "40px" , borderBottom: "solid 1px grey", justifyContent:"space-between", alignItems: "center", flexWrap: "wrap"}}>
                <div key={song.id} style={{ width: "200px"}}>
                  <h3>{song.name}</h3>
                  <p>{song.artist}</p>
                </div>

                <div>
                  <figure>
                    <figcaption></figcaption>
                    <audio controls src={song.sample}>
                      Your browser does not support the
                      <code>audio</code> element.
                    </audio>
                  </figure>
                </div>

                <div>
                  {song.imageUrl.length ? (
                    <img src={song.imageUrl} style={{ width: "100px" }} />
                  ) : null}
                </div>

                <div>
                  <button onClick={() => {this.handleDeleteSong(song._id)}} className="btn-outline">Delete Track</button>
                </div>
              
              </div>
              
            );
          })}
      </div>
    );
  }
}

export default ShowPlaylist;

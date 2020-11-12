import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../config";
import { Link } from "react-router-dom";

class SoundbirdPlaylist extends Component {
  state = {
    myMatch: null,
    matchPlaylist: [],
    addButton: "add to my playlist",
    addedButton: "added",
  };

  componentDidMount() {
    const { selectedMatch } = this.props.location.state;
    this.handleMatchPlaylist(selectedMatch);
    this.setState({
      myMatch: selectedMatch,
    });
  }

  // handleAddedButton(e){
  //   e.preventDefault()
  //   this.setState({
  //     addButton: this.state.addedButton
  //   })
  // }

  handleMatchPlaylist = (match) => {
    axios
      .post(
        `${API_URL}/show-match-playlist`,
        { match },
        { withCredentials: true }
      )
      .then((response) => {
        // console.log(response.data);
        this.setState({
          matchPlaylist: response.data,
        });
      })
      .catch((err) => {
        console.log("couldn't fetch the playlist", err);
      });
  };

  handleAddToMyPlaylist = (song) => {
    console.log(song);

    axios
      .post(
        `${API_URL}/add-matchsong-to-myplaylist`,
        { song },
        { withCredentials: true }
      )
      .then(() => {
        console.log("song added to my playlist");
        // this.setState({
        //   addButton: this.state.addedButton
        // })
      })
      .catch((err) => {
        console.log("couldn't fetch the playlist", err);
      });
  };

  render() {
    if (!this.state.myMatch) {
      return null;
    }
    if (!this.state.matchPlaylist) {
      return null;
    }

    const { myMatch, matchPlaylist } = this.state;
    console.log(this.state.myMatch.name);
    // console.log(this.state.myMatch._id);
    return (
      <div>
        <Link
          className="btn-outline-bottom"
          to="/dashboard"
          style={{ textDecoration: "none", marginRight: "20px" }}
        >
          To the Dashboard
        </Link>

        <Link
          className="btn-outline-bottom"
          to="/find-soundbird"
          style={{ textDecoration: "none" }}
        >
          all soundbirds
        </Link>
        <div className="profile-card-container">
          <h2>{myMatch.name}' Playlist</h2>
          <p style={{ fontStyle: "italic", fontSize: "1,1rem" }}>
            {" "}
            <span style={{ fontWeight: "bold" }}>About me:</span>{" "}
            {myMatch.aboutMe}
          </p>
          {myMatch.imageUrl ? (
            <div
              style={{
                height: "400px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src={myMatch.imageUrl}
                style={{
                  width: "100%",
                  position: "absolute",
                  marginTop: "-600px",
                }}
              />
            </div>
          ) : null}
        </div>

        <hr></hr>
        {matchPlaylist &&
          matchPlaylist.map((song) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingBottom: "40px",
                  borderBottom: "solid 1px grey",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <div key={song.id} style={{ width: "200px" }}>
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
                  <button
                    onClick={() => {
                      this.handleAddToMyPlaylist(song);
                    }}
                    className="btn-outline"
                  >
                    {this.state.addButton}
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default SoundbirdPlaylist;

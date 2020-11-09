import React, { Component } from "react";
import { Link } from "react-router-dom";

class TracksDetail extends Component {
  render() {
    console.log(this.props.myTracks);
    const { myTracks, onSelectTrack } = this.props;

    return (
      <div>
        {/* <h5>Select tracks</h5>  */}
        {myTracks &&
          myTracks.map((track) => {
            console.log(track);
            return (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p key={track.id}>
                  <h4>{track.name}</h4>
                  <p>{track.artists[0].name}</p>

                  <figure>
                    <figcaption></figcaption>
                    <audio controls src={track.preview_url}>
                      Your browser does not support the
                      <code>audio</code> element.
                    </audio>
                  </figure>

                  <button
                    className="btn-filled"
                    onClick={() => {
                      onSelectTrack(track);
                    }}
                  >
                    Add to my playlist
                  </button>
                </p>

                {track.album.images.length ? (
                  <img
                    key={track.id}
                    src={track.album.images[0].url}
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

export default TracksDetail;

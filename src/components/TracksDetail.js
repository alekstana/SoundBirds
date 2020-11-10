import React, { Component } from "react";
import { Link } from "react-router-dom";

class TracksDetail extends Component {
  render() {
    console.log(this.props.myTracks);
    const { myTracks, onSelectTrack } = this.props;

    return (
      <div>
        {myTracks &&
          myTracks.map((track) => {
            console.log(track);
            return (
              <div>
                <div key={track.id} style={{ display: "flex", flexDirection: "row", paddingBottom: "40px" , borderBottom: "solid 1px grey", justifyContent:"space-between", alignItems: "center"}}>
                  <div style={{ width: "200px"}}>
                    <h4>{track.name}</h4>
                    <p>{track.artists[0].name}</p>
                  </div>
                  <figure>
                    <figcaption></figcaption>
                    <audio controls src={track.preview_url}>
                      Your browser does not support the
                      <code>audio</code> element.
                    </audio>
                  </figure>

                  {track.album.images.length ? (
                    <img
                      key={track.id}
                      src={track.album.images[0].url}
                      style={{ width: "100px" }}
                    />
                  ) : null}

                  <div>
                    <button
                      className="btn-filled"
                      onClick={() => {
                        onSelectTrack(track);
                      }}
                    >
                      + Add to my playlist
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default TracksDetail;

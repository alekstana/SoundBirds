import React, { Component } from 'react'
import { Link } from "react-router-dom";

class TracksDetail extends Component {

  render() {

    console.log(this.props.myTracks)
    const {myTracks} = this.props

    return (
      <div>
          <h2>Select tracks</h2>
          {myTracks.map((track) => {
              return (
  
                  <div>
                  <a key={track.id} onClick={() => {this.props.onSelectArtist(track.id) } }>
                  {track.name}
                  {track.artists[0].name}
                  </a>

                  {
                      track.album.images.length ? (
                        <img src={track.album.images[0].url}/>
                      ) : null
                  }
                  

                  
                  </div>
                  );
            })} 
      </div>
    )
  }
}


export default TracksDetail;
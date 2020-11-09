import React, { Component } from "react";
import { Link } from "react-router-dom";

class ArtistDetail extends Component {
   
    state = {
        myArtists: this.props.myArtists
    }

  render() {
    
    const {myArtists} = this.state
    // console.log(myArtists)

    return (
      <div>
          <h2>Artist name</h2>
          {myArtists.map((artist) => {
              return (
  
                  <div>
                  <Link to={`/find-tracks/${artist.id}`} ><a key={artist.id}  onClick={() => {this.props.onSelectArtist(artist.id) } }>
                  {artist.name}
                  
                  </a></Link>
                  {
                      artist.images.length ? (
                        <img src={artist.images[0].url}/>
                      ) : null
                  }
                  <img src={artist.images[0].url}/>

                  
                  </div>
                  );
            })} 
      </div>
    );
  }
}

export default ArtistDetail;

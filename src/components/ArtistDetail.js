import React from "react";

function ArtistDetail(props) {


  return (
      
      <form onSubmit={props.onArtistSearch}>
        <div >
          <label>Artist</label>
          <input type="text" name="name" />
        </div>
        <button type="submit">Search</button>
      </form>

  );
}

export default ArtistDetail;

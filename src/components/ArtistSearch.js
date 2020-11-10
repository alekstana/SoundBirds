import React, { useState } from "react";


function ArtistSearch(props) {
  const [context, setContext] = useState(null);

  const onContextChange = (e) => {
    setContext(e.target.value);
  };

  return (
    <form onSubmit={(e) => props.onMusicSearch(e, context)}>
     
      <div style={{ display: "flex", flexDirection: "row", paddingBottom: "40px", paddingRight: "100px", borderBottom: "solid 1px grey", alignItems: "center", justifyContent: "space-around" }}>
        <label class="mdc-text-field mdc-text-field--outlined mdc-text-field--no-label">
          <span class="mdc-notched-outline">
            <span class="mdc-notched-outline__leading"></span>
            <span class="mdc-notched-outline__trailing"></span>
          </span>
          <input
            style={{ width: "350px" }}
            class="mdc-text-field__input"
            type="text"
            name="name"
            aria-label="Label"
            placeholder="Find your favourite artist"
          />
        </label>
        <input
          onChange={onContextChange}
          type="checkbox"
          name="context"
          value="artist"
        />
        <label> Artists</label>
        <input
          onChange={onContextChange}
          type="checkbox"
          name="context"
          value="track"
        />
        <label> Tracks</label>
        <input
          onChange={onContextChange}
          type="checkbox"
          name="context"
          value="all"
        />
        <label> All</label>
        <button type="submit" className="btn-filled ">
          Search
        </button>
      </div>
      

      
    </form>
  );
}

export default ArtistSearch;

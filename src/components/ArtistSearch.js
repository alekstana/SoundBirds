import React, { useState } from "react";


function ArtistSearch(props) {
  const [context, setContext] = useState(null);

  const onContextChange = (e) => {
    setContext(e.target.value);
  };

  return (
    <form onSubmit={(e) => props.onMusicSearch(e, context)}>
     
      <div style={{ display: "flex", paddingBottom: "40px", borderBottom: "solid 1px grey", flexWrap: "wrap"}}>
        <div style={{marginRight: "20px"}}>
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
       </div>
        <div style={{ display: "flex", flexDirection: "row", padding: "20px 20px 20px 0", justifyContent: "flex-start", flexWrap: "wrap", alignItems: "baseline"}}>
        <div style={{padding:"0 10px 0 0"}}>
        <input
          onChange={onContextChange}
          type="checkbox"
          name="context"
          value="artist"
        />
        <label> Artists</label>
        </div>
        <div style={{padding:"0 10px"}}>
        <input
          onChange={onContextChange}
          type="checkbox"
          name="context"
          value="track"
        />
        <label> Tracks</label>
        </div>

        <div style={{margin:"0 10px"}}>
        <input
          onChange={onContextChange}
          type="checkbox"
          name="context"
          value="all"
        />
        <label> All</label>
        </div>
        </div>
        <div style={{margin:"10px 0 "}}>
        <button type="submit" className="btn-filled " >
          Search
        </button>
        </div>
      </div>
      

      
    </form>
  );
}

export default ArtistSearch;

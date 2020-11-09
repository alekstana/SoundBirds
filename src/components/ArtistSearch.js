import React , {useState} from "react";
import ArtistDetail from "./ArtistDetail";

function ArtistSearch(props) {

  const [context, setContext] = useState(null)

  const onContextChange = (e) => {
    setContext(e.target.value)
  }

  return (
    <form onSubmit={(e) => props.onMusicSearch(e, context)}>
      <div>
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
        <input onChange={onContextChange} type="checkbox" name="context" value="artist"/>
        <label > Artists</label>
        <input onChange={onContextChange} type="checkbox"  name="context" value="track"/>
        <label > Tracks</label>
        <input onChange={onContextChange} type="checkbox"  name="context" value="all"/>
        <label > All</label>
      </div>
      <div className="mini-container">
      <button type="submit" className="btn-filled ">
        Search
      </button>
      </div>
    </form>


  );
}

export default ArtistSearch;

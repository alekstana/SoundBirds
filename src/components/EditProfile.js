import React from "react";
import { Link } from "react-router-dom";

function SignUp(props) {
  return (
    <form onSubmit={props.onEditProfile}>
      <Link
        className="btn-outline-bottom"
        to="/dashboard"
        style={{ textDecoration: "none" }}
      >
        {" "}
        To the Dashboard
      </Link>
      <div className="mini-container">
        <label class="mdc-text-field mdc-text-field--filled mdc-text-field--no-label">
          <span class="mdc-text-field__ripple"></span>
          <input
            style={{ width: "450px" }}
            class="mdc-text-field__input"
            name="name"
            type="text"
            placeholder={props.loggedInUser.name}
            aria-label="Label"
          />
          <span class="mdc-line-ripple"></span>
        </label>
      </div>
      {/* <div className="mini-container">
        <label class="mdc-text-field mdc-text-field--filled mdc-text-field--no-label">
          <span class="mdc-text-field__ripple"></span>
          <input
            style={{ width: "450px" }}
            class="mdc-text-field__input"
            name="email"
            type="text"
            placeholder={props.loggedInUser.email}
            aria-label="Label"
          />
          <span class="mdc-line-ripple"></span>
        </label>
      </div> */}

      <p style={{ fontStyle: "italic", fontSize: "12pt" }}>
        What music sparks joy for you?
      </p>
      <label
        class="mdc-text-field mdc-text-field--filled mdc-text-field--textarea mdc-text-field--no-label"
        style={{ width: "480px" }}
      >
        <span className="mdc-text-field__ripple"></span>
        <span className="mdc-text-field__resizer">
          <textarea
            name="aboutMe"
            type="text"
            class="mdc-text-field__input"
            rows="8"
            cols="40"
            aria-label="Label"
            placeholder={props.loggedInUser.aboutMe}
          ></textarea>
        </span>
        <span className="mdc-line-ripple"></span>
      </label>
      <div>
        <p style={{ fontStyle: "italic", fontSize: "12pt" }}>
          Choose your profile image
        </p>
        <input type="file" name="image"/>
      </div>
      <div className="mini-container">
        <button type="submit" className="btn-filled">
          Edit Profile
        </button>
      </div>
    </form>
  );
}

export default SignUp;

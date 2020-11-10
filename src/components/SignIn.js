import React, { useEffect } from "react";
import "../App.css";

function SignIn(props) {
  const { loggedInUser } = props;

  return (
    <form onSubmit={props.onSignIn}>
    <h2>Welcome back. Sign in! </h2>
      <div className="mini-container">
        <label class="mdc-text-field mdc-text-field--filled mdc-text-field--no-label">
          <span class="mdc-text-field__ripple"></span>
          <input
            style={{ width: "450px" }}
            class="mdc-text-field__input"
            name="email"
            type="text"
            placeholder="Email address"
            aria-label="Label"
          />
          <span class="mdc-line-ripple"></span>
        </label>
      </div>
      <div className="mini-container">
        <label class="mdc-text-field mdc-text-field--filled mdc-text-field--no-label">
          <span class="mdc-text-field__ripple"></span>
          <input
            style={{ width: "450px" }}
            class="mdc-text-field__input"
            name="password"
            type="password"
            placeholder="Password"
            aria-label="Label"
          />
          <span class="mdc-line-ripple"></span>
        </label>
      </div>
      <div className="mini-container">
        <button type="submit" className="btn-filled">
          Submit
        </button>
      </div>
    </form>

    // <form onSubmit={props.onSignIn}>
    //   <div>
    //     <label>Email address</label>
    //     <input type="text" name="email" />
    //   </div>
    //   <div>
    //     <label>Password</label>
    //     <input name="password" type="password" />
    //   </div>

    //   <button type="submit">Submit</button>
    // </form>
  );
}

export default SignIn;

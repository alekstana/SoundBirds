import React from "react";

function SignUp(props) {
  return (
    //   <form onSubmit={props.onSignUp}>
    //     <div>
    //       <label>Name</label>
    //       <input type="text" name="name"></input>
    //     </div>
    //     <div>
    //       <label>Email</label>
    //       <input type="text" name="email"></input>
    //     </div>
    //     <div>
    //       <label>Password</label>
    //       <input type="text" name="password" type="password"></input>
    //     </div>
    //     <button type="submit">Submit</button>
    //   </form>

    <form onSubmit={props.onSignUp} >
      <div className="mini-container">
        <label class="mdc-text-field mdc-text-field--filled mdc-text-field--no-label" >
          <span class="mdc-text-field__ripple"></span>
          <input
            style={{ width: "450px" }}
            class="mdc-text-field__input"
            name="name"
            type="text"
            placeholder="Name"
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
  );
}

export default SignUp;

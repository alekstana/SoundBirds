import React from "react";

function SignUp(props) {

  return (
  
      <form onSubmit={props.onSignUp}>
        <div>
          <label>Name</label>
          <input type="text" name="name"></input>
        </div>
        <div>
          <label>Email</label>
          <input type="text" name="email"></input>
        </div>
        <div>
          <label>Password</label>
          <input type="text" name="password" type="password"></input>
        </div>
        <button type="submit">Submit</button>
      </form>
  );
}

export default SignUp;

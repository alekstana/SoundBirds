import React, { useEffect } from "react";

function SignIn(props) {

  const {loggedInUser} = props
 
  return (

    <form onSubmit={props.onSignIn}>
      <div>
        <label>Email address</label>
        <input type="text" name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" />
      </div>
      <button type="submit">Submit</button>
    </form>

  );
}


export default SignIn;

import React from "react";
import Singup from '../../pages/Signup'


function SignupCard(props) {
  return (
    <div className="card">
      <div className="Nav-container">
        <br/>
        <h4>Sign up</h4>
      </div>
      <div className="content">
        <Singup/>
      </div>
    </div>
  );
}

export default SignupCard;
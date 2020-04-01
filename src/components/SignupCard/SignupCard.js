import React from "react";
import Singup from '../../pages/Signup'


function SignupCard(props) {
  return (
    <div className="card1">
      <div className="Nav-container">
        <br/>
        <h4>Sign up</h4>
      </div>
      <div className="content1">
        <Singup/>
      </div>
    </div>
  );
}

export default SignupCard;
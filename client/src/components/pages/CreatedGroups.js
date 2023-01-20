import React from "react";
import "./CreatedGroups.css";
import { Link } from "@reach/router";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";

function CreatedGroups(props) {
  //   let loginModal = null;
  //   if (!props.userId) {
  //     loginModal = <div> Please Login First! </div>;
  //   }

  return (
    <>
      <div>
        {props.userId ? (
          <div className="Whole Page">
            <b className="Created-Groups-header">CREATED GROUPS</b>
            {/* <Groups /> */}
          </div>
        ) : (
          <div className="Whole Page">
            <b className="must-login">Please log in</b>
          </div>
        )}
      </div>
    </>
  );
}

export default CreatedGroups;

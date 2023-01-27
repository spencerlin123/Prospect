import React, { useState, useEffect } from "react";
import "./IndividualProspectPage.css";
import { Link } from "@reach/router";
import { Profile } from "../modules/profile/Profile";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import { get } from "../../utilities";

function IndividualProspectPage(props) {
  return (
    <>
      <div>
        {props.userId ? (
          <div>
            <b className="ProspectsPage-header">PROSPECT</b>
          </div>
        ) : (
          <div>
            <b className="ProspectsPage-login">Please log in</b>
          </div>
        )}
      </div>
    </>
  );
}

export default IndividualProspectPage;

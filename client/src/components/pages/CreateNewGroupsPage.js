import "./CreateNewGroupsPage.css"
import React, {useState, useEffect} from "react";
import { Link } from "@reach/router";
import { Group } from "../modules/Group";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import {get} from "../../utilities";



function CreateNewGroupsPage (props) {


return (
    <>
      <div>
        {props.userId ? (
          <div>
            <>
                <b className="CreateNewGroups-header">CREATE NEW GROUP</b>
            </>
            <div className="CreateNewGroups-line">
              <Link to="/created-groups">
                <div className="CreateNewGroups-container">
                  SUBMIT
                </div>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <b className="CreateNewGroups-login">Please log in</b>
          </div>
        )}
      </div>
    </>
  );
}

export default CreateNewGroupsPage;
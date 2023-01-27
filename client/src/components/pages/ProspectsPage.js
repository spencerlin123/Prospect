import React, { useState, useEffect } from "react";
import "./ProspectsPage.css";
import { Link } from "@reach/router";
import { Profile } from "../modules/profile/Profile";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import { get } from "../../utilities";

function ProspectsPageG(props) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    get("/api/users").then((userObjs) => {
      console.log(userObjs);
      setUsers(userObjs);
    });
  }, []);

  return (
    <>
      <div>
        {props.userId ? (
          <div>
            <b className="ProspectsPage-header">PROSPECTS</b>
            <div className="ProspectsPage-container">
              {users.map((user_info) => (
                <div className="ProspectsPage-profiles">
                  <Profile img_url={user_info.img_url} name={user_info.name} />
                </div>
              ))}
            </div>
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

export default ProspectsPageG;

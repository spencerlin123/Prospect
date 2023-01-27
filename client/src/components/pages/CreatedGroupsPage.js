import React, { useState, useEffect } from "react";
import "./CreatedGroupsPage.css";
import { Link } from "@reach/router";
import { Group } from "../modules/CGroup";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import { get } from "../../utilities";

function CreatedGroupsPage(props) {
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    get("/api/createdgroups").then((groupObjs) => {
      setGroups(groupObjs);
    });
  }, []);

  return (
    <>
      <div>
        {props.userId ? (
          <div>
            <b className="CreatedGroups-header">CREATED GROUPS</b>
            {groups.map((group_info) => (
              <div>
                <Group
                  img_url={group_info.img_url}
                  title={group_info.title}
                  description={group_info.description}
                  prospects={group_info.prospects}
                />
              </div>
            ))}
            <div className="Cemptyspace" />
            <div className="CreatedGroups-line">
              <Link to="/createnewgroup">
                <div className="CreatedGroups-container">CREATE NEW GROUP +</div>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <b className="CreatedGroups-login">Please log in</b>
          </div>
        )}
      </div>
    </>
  );
}

export default CreatedGroupsPage;

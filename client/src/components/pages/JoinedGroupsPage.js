import React, {useState, useEffect} from "react";
import "./JoinedGroupsPage.css";
import { Link } from "@reach/router";
import { Group } from "../modules/Group";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import {get} from "../../utilities";

function JoinedGroupsPage(props) {
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    get("/api/groups").then((groupObjs) => {
      setGroups(groupObjs);
    });
  }, []);

  return (
    <>
      <div>
        {props.userId ? (
          <div>
            <b className="JoinedGroupsPage-header">JOINED GROUPS</b>
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

            <div className="JoinedGroupsPage-line">
              <Link to="/entercode">
                <div className="JoinedGroupsPage-container">
                  JOIN WITH A CODE +
                </div>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <b className="JoinedGroupsPage-login">Please log in</b>
          </div>
        )}
      </div>
    </>
  );
}

export default JoinedGroupsPage;

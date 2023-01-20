import React from "react";
import "./JoinedGroups.css";
import { Link } from "@reach/router";
import { Group } from "../modules/Group";

function JoinedGroups() {
  return (
    <>
      <div className="Whole Page">
        <b className="Joined-Groups-header">JOINED GROUPS</b>
        <Group img_url= "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445" title="dog" description="dddd" prospects={8} />
        <div className="line">
          <div className="Join-Code-box">
              <Link to="/entercode/" className="nav-links-code">
                <div className="Join-Code-text">JOIN WITH A CODE</div>
                <div className="Plus-sign">+</div>
              </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default JoinedGroups;

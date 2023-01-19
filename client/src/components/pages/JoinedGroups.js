import React from "react";
import "./JoinedGroups.css";
import { Link } from "@reach/router";

function JoinedGroups() {
  return (
    <>
      <div className="Whole Page">
        <b className="Joined-Groups-header">JOINED GROUPS</b>
        {/* <Groups /> */}
        <div className="Join-Code-box">
            <div className="Join-Code-text">JOIN WITH A CODE
                <b className="Plus-sign">+</b>
            </div>
        
        </div>
      </div>
    </>
  );
}

export default JoinedGroups;

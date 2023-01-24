import React from "react";
import "./GroupCode.css";

function GroupCode(props) {
  return (
    <div className="GroupCode-page">
      <h1 className="GroupCode-logo">PROSPECT</h1>
      <div className="GroupCode-container">
        <input className="GroupCode-enter-code" type="text" placeholder="ENTER CODE" />
        <button className="GroupCode-submit">SUBMIT</button>
      </div>
    </div>
  );
}

export default GroupCode;

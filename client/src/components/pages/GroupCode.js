import "./GroupCode.css";
import React, { useState, useEffect } from "react";
import { get, post } from "../../utilities";

function GroupCode(props) {
  const [code, setCode] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    post("/api/editGroup", { group_code: code }).then((res) => console.log(res));
  };

  return (
    <div className="GroupCode-page">
      <h1 className="GroupCode-logo">PROSPECT</h1>
      <div className="GroupCode-container">
        <input
          className="GroupCode-enter-code"
          type="text"
          placeholder="ENTER CODE"
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
          }}
        />
        <button type="submit" className="GroupCode-submit" value="Submit" onClick={handleSubmit}>
          SUBMIT
        </button>
        {/* <button className="GroupCode-submit">SUBMIT</button> */}
      </div>
    </div>
  );
}

export default GroupCode;

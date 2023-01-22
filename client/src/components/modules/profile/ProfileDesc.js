import React from "react";
import "./ProfileDesc.css";
import { Link } from "@reach/router";

export const ProfileDesc = (props) => {
  return (
    <div className="ProfileDesc-container">
        <div className="ProfileDesc-name">{props.name}</div>
    </div>
  );
};
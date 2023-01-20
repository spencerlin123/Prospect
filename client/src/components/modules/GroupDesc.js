import React from "react";
import "./GroupDesc.css";
import { Link } from "@reach/router";

export const GroupDesc = (props) => {
  return (
    <div className="GroupDesc-container">
        <div className="GroupDesc-title">{props.title}</div>
        <div className="GroupDesc-Description">{props.description}</div>
        <div className="GroupDesc-Prospects">{props.prospects}</div>
    </div>
  );
};

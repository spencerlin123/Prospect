import React from "react";
import "./CreatedGroupsDesc.css";
import { Link } from "@reach/router";

export const GroupDesc = (props) => {
  return (
    <div className="CreatedGroupDesc-container">
        <div className="CreatedGroupDesc-title">{props.title}</div>
        <div className="CreatedGroupDesc-Description">{props.description}</div>
        <div className="CreatedGroupDesc-Prospects">{props.prospects}</div>
    </div>
  );
};
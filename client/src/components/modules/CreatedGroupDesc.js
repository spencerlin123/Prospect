import React from "react";
import "./CreatedGroupDesc.css";
import { Link } from "@reach/router";

export const CreatedGroupDesc = (props) => {
  return (
    <div className="GroupDesc-container">
        <div className="CreatedGroupDesc-title">{props.title}</div>
        <div className="CreatedGroupDesc-Description">{props.description}</div>
        <div className="CreatedGroupDesc-Prospects">{props.prospects}</div>
    </div>
  );
};
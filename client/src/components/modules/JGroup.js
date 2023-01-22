import React from "react";
import "./JGroup.css";
import { Link } from "@reach/router";
import { GroupDesc } from "./GroupDesc";
import { GroupPic } from "./GroupPic";

export const Group = (props) => {
  return (
    <div className="Group-container">
      <GroupPic img_url={props.img_url} />
      <GroupDesc title={props.title} description={props.description} prospects={props.prospects} />
    </div>
  );
};

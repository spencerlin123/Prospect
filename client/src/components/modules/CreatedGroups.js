import React from "react";
import "./CreatedGroups.css";
import { Link } from "@reach/router";
import { GroupDesc } from "./CreatedGroupsDesc";
import { GroupPic } from "./CreatedGroupsPic";

export const Group = (props) => {
  return (
    <div className="CreatedGroups-container">
      <GroupPic img_url={props.img_url} />
      <GroupDesc title={props.title} description={props.description} prospects={props.prospects} />
    </div>
  );
};

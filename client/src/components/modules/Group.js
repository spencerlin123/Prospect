import React from "react";
import "./Group.css";
import { Link } from "@reach/router";
import { GroupDesc } from "./GroupDesc";
import { GroupPic } from "./GroupPic";

export const Group = (props) => {
  return (
    <Link to={"/created-groups/" + props.title} className="Group-container">
      <GroupPic img_url={props.img_url} />
      <GroupDesc title={props.title} description={props.description} prospects={props.prospects} />
    </Link>
  );
};

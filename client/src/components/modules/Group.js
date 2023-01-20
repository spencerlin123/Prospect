import React from "react";
import "./Group.css";
import { Link } from "@reach/router";
import { GroupDesc } from "./GroupDesc";
import { GroupPic } from "./GroupPic";

const STYLES = ["btn--primary, btn--outline"];

const SIZES = ["button--medium", "btn--large"];

export const Group = (props) => {

  return (
    <div className="Group-container">
      <GroupPic img_url={props.img_url}/>
      <GroupDesc title={props.title} description={props.description} prospects={props.prospects} />
    </div>
  );
};

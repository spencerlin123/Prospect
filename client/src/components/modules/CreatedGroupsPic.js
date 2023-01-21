import React from "react";
import "./CreatedGroupsPic.css";
import { Link } from "@reach/router";

export const GroupPic = (props) => {
  return (
    <div className="CreatedGroupsPic-pic">
      <img src={props.img_url} className="CreatedGroupsPic-image"></img>
    </div>
  );
};

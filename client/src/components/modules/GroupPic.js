import React from "react";
import "./GroupPic.css";
import { Link } from "@reach/router";

export const GroupPic = (props) => {
  return (
    <div className="GroupPic-pic"> 
        <img src={props.img_url} className="GroupPic-image"></img>
    </div>
  );
};
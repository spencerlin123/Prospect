import React from "react";
import "./ProfilePic.css";

export const ProfilePic = (props) => {
  return (
    <div className="ProfilePic-pic"> 
        <img src={props.img_url} className="ProfilePic-image"></img>
    </div>
  );
};
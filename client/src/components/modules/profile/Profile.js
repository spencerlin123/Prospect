import React from "react";
import "./Profile.css";
import { Link } from "@reach/router";
import { ProfilePic } from "./ProfilePic";
import { ProfileDesc } from "./ProfileDesc";

export const Profile = (props) => {
  return (
    <div className="Profile-container">
      <ProfilePic className="Profile-pic" img_url={props.img_url} />
      <ProfileDesc className="Profile-desc" name={props.name} />
    </div>
  );
};

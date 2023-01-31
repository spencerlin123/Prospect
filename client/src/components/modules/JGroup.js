import React from "react";
import "./JGroup.css";
import { Link } from "@reach/router";
import { GroupDesc } from "./GroupDesc";
import { GroupPic } from "./GroupPic";
import { get, post } from "../../utilities";

export const Group = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(prospect.googleid);
    post("/api/leavegroup", { group_code: props.group_code });
    location.reload();
  };
  return (
    <div className="JGroup-container">
      <GroupPic img_url={props.img_url} />
      <GroupDesc title={props.title} description={props.description} prospects={props.prospects} />
      <button type="submit" className="JGroup-leave" value="Submit" onClick={handleSubmit}></button>
    </div>
  );
};

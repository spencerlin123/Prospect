import React from "react";
import "./GroupPic.css";
import { Link } from "@reach/router";


const STYLES = ["btn--primary, btn--outline"];

const SIZES = ["button--medium", "btn--large"];

export const GroupPic = (props) => {

  return (
    // <div className="GroupPic-pic" style={{backgroundImage: props.img_url, backgroundSize: "cover"}}>hhj</div>
    <div className="GroupPic-pic"> 
        <img src={props.img_url} className="GroupPic-image"></img>
    </div>
    
  );
};

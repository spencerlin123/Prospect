import React, { useState, useEffect } from "react";
import "./Question.css";
import { Link } from "@reach/router";
// import { GroupDesc } from "./GroupDesc";
// import { GroupPic } from "./GroupPic";
export const Question = (props) => {
  const [desc, setDesc] = useState("");

  return (
    <div>
      <input className="CreateNewContainer-inputbox" type="text" placeholder={props.text} value={desc} onChange={(e)=>{setDesc(e.target.value)}} />
    </div>
  );

};
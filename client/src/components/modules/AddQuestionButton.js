import React from 'react'; 
import "./Question.css"

const Button = (props) => { 
  
  return ( 
    <button className="AddButton" onClick={props.onClick}>{props.text}</button> 
  ); 
  
} 

export {Button};
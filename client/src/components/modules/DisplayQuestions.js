import React from "react";
import { useState } from "react";
import "./DisplayQuestions.css";
import { post } from "../../utilities";
import { navigate } from "@reach/router";

function DisplayQuestions(props) {
  const [answer, setAnswer] = useState("");
  const submitAnswer = (event) => {
    event.preventDefault();
    post("/api/answers", {
      googleid: props.googleid,
      group_code: props.code,
      question: props.question,
      answer: answer,
    }).then((res) => {
      console.log(res);
      navigate("/joined-groups");
    });
  };
  return (
    <div className="GroupQuestions-container">
      <div className="GroupQuestions-question">{props.question}</div>
      <input
        className="GroupQuestions-input"
        type="text"
        placeholder="Enter Answer"
        value={answer}
        onChange={(e) => {
          setAnswer(e.target.value);
        }}
      />
      <div onClick={submitAnswer}> SUBMIT</div>
    </div>
  );
}

export default DisplayQuestions;

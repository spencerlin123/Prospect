import React, {useEffect} from "react";
import { useState } from "react";
import "./DisplayQuestions.css";
import { post } from "../../utilities";
import { navigate } from "@reach/router";

function DisplayQuestions(props) {
  //   const submitAnswer = (event) => {
  //     event.preventDefault();
  //     post("/api/answers", {
  //       googleid: props.googleid,
  //       group_code: props.code,
  //       question: props.question,
  //       answer: answer,
  //     }).then((res) => {
  //       console.log(res);
  //       navigate("/joined-groups");
  //     });
  //   };
  useEffect(() => {
    console.log(props.answers);
  }, [props.answers]);

  return (
    <div className="GroupQuestions-container">
      <div className="GroupQuestions-question">{props.question}</div>
      <input
        className="GroupQuestions-input"
        type="text"
        placeholder="Enter Answer"
        value={props.answers.length > 0 ? props.answers[props.index] : ""}
        onChange={(e) => {
          const answersCopy = [...props.answers];
          answersCopy[props.index] = e.target.value;
          props.setAnswers(answersCopy);
        }}
      />
      {/* <div onClick={submitAnswer}> SUBMIT</div> */}
    </div>
  );
}

export default DisplayQuestions;

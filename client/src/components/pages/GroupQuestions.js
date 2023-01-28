import "./GroupQuestions.css";
import React, { useState, useEffect } from "react";
import { get, post } from "../../utilities";
import DisplayQuestions from "../modules/DisplayQuestions";

function GroupQuestionsPage(props) {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    get("/api/group-questions", {
      group_code: props.code,
    }).then((questions) => {
      setQuestions(questions);
      console.log(props.code);
      console.log(questions);
      console.log(props.googleid);
    });
  }, []);
  return (
    <>
      <div className="GroupQuestions-emptyspace" />
      <div className="GroupQuestions-page">
        <div className="grayinfo-container">{props.title}</div>
        <div className="Questions-container">
          <div className="GroupQuestions-header">QUESTIONS</div>
          <div className="GroupQuestions-body">
            {questions.map((question) => (
              <div>
                <DisplayQuestions question={question} code={props.code} googleid={props.googleid} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="Questions-line">
        <button className="Questions-submit">SUBMIT</button>
      </div>
    </>
  );
}

export default GroupQuestionsPage;

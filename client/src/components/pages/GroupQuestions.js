import "./GroupQuestions.css";
import React, { useState, useEffect } from "react";
import { get, post } from "../../utilities";
import DisplayQuestions from "../modules/DisplayQuestions";
import { navigate } from "@reach/router";

function GroupQuestionsPage(props) {
  const [questions, setQuestions] = useState([]);
  const [title, setTitle] = useState();
  const [img_url, setImg_url] = useState();
  const [description, setDescription] = useState();
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    get("/api/group-questions", {
      group_code: props.code,
    }).then((group) => {
      setQuestions(group.questions.filter((q) => q != ""));
      setTitle(group.title);
      setImg_url(group.img_url);
      setDescription(group.description);
      setAnswers(Array(group.questions.length).fill(""));
    });
  }, []);

  const submitAnswer = (event) => {
    event.preventDefault();
    post("/api/answers", {
      googleid: props.googleid,
      group_code: props.code,
      questions: questions,
      answers: answers,
    }).then((res) => {
      console.log("here");
      console.log(res);
    });
    navigate("/joined-groups");
  };

  return (
    <>
      <div className="GroupQuestions-emptyspace" />
      <div className="GroupQuestions-page">
        <div className="left-empty-space" />
        <div className="grayinfo-container">
          <img src={img_url} className="GroupQuestions-img" />
          <div className="GroupQuestions-title">{title}</div>
          <div className="GroupQuestions-description">{description}</div>
        </div>
        <div className="Questions-container">
          <div className="GroupQuestions-header">QUESTIONS</div>
          <div className="GroupQuestions-body">
            {questions.map((question, index) => (
              <div>
                <DisplayQuestions
                  question={question}
                  answers={answers}
                  setAnswers={setAnswers}
                  index={index}
                />
              </div>
            ))}
          </div>
          <div className="GroupQuestions-bottom-emptyspace" />
        </div>
      </div>
      <div className="Questions-line">
        <div onClick={submitAnswer} className="Questions-submit">
          SUBMIT
        </div>
      </div>
    </>
  );
}

export default GroupQuestionsPage;

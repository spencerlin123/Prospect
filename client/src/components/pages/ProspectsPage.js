import React, { useState, useEffect } from "react";
import "./ProspectsPage.css";
import { Link, navigate } from "@reach/router";
import { Profile } from "../modules/profile/Profile";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import { get, post } from "../../utilities";
import { useLocation } from "@reach/router";

function ProspectsPage(props) {
  const [users, setUsers] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [access_message, setAccess_message] = useState(null);

  useEffect(() => {
    get("/api/users", { group_code: props.group_code }).then((responseObj) => {
      if (responseObj.succeeded) {
        setUsers(responseObj.users);
      } else {
        setAccess_message("Authorization Failed");
      }
    });
  }, []);

  useEffect(() => {
    get("/api/get-answers", { group_code: props.group_code }).then((answerObjs) => {
      setAnswers(answerObjs);
    });
  }, []);

  const handleSubmit1 = (event) => {
    event.preventDefault();
    post("/api/deleteprospect", { googleid: prospect.googleid, group_code: props.group_code });
    location.reload();
  };

  const handleSubmit2 = (event) => {
    event.preventDefault();
    post("/api/deletegroup", { group_code: props.group_code });
    navigate("/created-groups");
  };

  const [prospect, setProspect] = useState(null);
  return prospect ? (
    <>
      <span className="Prospects-wholepage">
        <div className="gray-container">
          <img src={prospect.img_url} className="about-circleimage" />
          <div className="about-name">{prospect.name}</div>
          <button className="delete-button" onClick={handleSubmit1}>
            REMOVE
          </button>
          <button className="Back-Button" onClick={() => location.reload()}>
            BACK
          </button>
        </div>
        <div className="error-message">{access_message}</div>
        <div className="about-empty-space" />
        <div className="IndividualPage-container">
          <div className="IndividualPage-header">ABOUT</div>
          <div className="ProspectsPage-answer">
            {answers.map((answerObjs) => (
              <div className="ProspectsPage-question">
                - {answerObjs.question}
                <div className="ProspectsPage-answer">{answerObjs.answer}</div>
              </div>
            ))}
          </div>
          <div className="questions-empty-space" />
        </div>
      </span>
    </>
  ) : (
    <>
      <div>
        {props.userId ? (
          <div>
            <b className="ProspectsPage-header">PROSPECTS</b>
            <div className="ProspectsPage-container">
              {users.map((user_info) => (
                <div onClick={() => setProspect(user_info)} className="ProspectsPage-profiles">
                  <Profile img_url={user_info.img_url} name={user_info.name} title={props.title} />
                </div>
              ))}
              <div className="error-message">{access_message}</div>
              <div className="Pemptyspace" />
              <div className="Prospects-line">
                <div className="button-fix">
                  <button className="group-delete" onClick={handleSubmit2}>
                    DELETE GROUP
                  </button>
                  <div className="group-code-share">GROUP CODE: {props.group_code}</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <b className="ProspectsPage-login">Please log in</b>
            <div className="error-message">{access_message}</div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProspectsPage;

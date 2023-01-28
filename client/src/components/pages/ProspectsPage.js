import React, { useState, useEffect } from "react";
import "./ProspectsPage.css";
import { Link, navigate } from "@reach/router";
import { Profile } from "../modules/profile/Profile";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import { get } from "../../utilities";
import { useLocation } from "@reach/router";

function ProspectsPage(props) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    get("/api/users", { group_code: props.group_code }).then((userObjs) => {
      console.log(userObjs);
      setUsers(userObjs);
    });
  }, []);

  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    get("/api/get-answers", { group_code: props.group_code, googleid: props.googleid }).then(
      answerObjs
    );
  });
  const [prospect, setProspect] = useState(null);
  console.log(prospect);
  console.log(useLocation());
  console.log(props.group_code);

  return prospect ? (
    <>
      <span className="Prospects-wholepage">
        <div className="gray-container">
          <img src={prospect.img_url} className="about-circleimage" />
          <div className="about-name">{prospect.name}</div>
          <button className="Back-Button" onClick={() => location.reload()}>
            BACK
          </button>
        </div>
        <div className="IndividualPage-container">
          <div className="IndividualPage-header">ABOUT</div>
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
              <div className="Pemptyspace" />
              <div className="Prospects-line">
                <div>
                  <div className="group-code-share">GROUP CODE: {props.group_code}</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <b className="ProspectsPage-login">Please log in</b>
          </div>
        )}
      </div>
    </>
  );
}

export default ProspectsPage;

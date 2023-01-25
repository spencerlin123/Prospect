import "./CreateNewGroupsPage.css";
import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import { Question } from "../modules/QuestionBox.js"
// import "../modules/Questions.css"
import { Button } from "../modules/AddQuestionButton.js"
import { Group } from "../modules/Group";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import { get } from "../../utilities";


// function showDiv() {
//   document.getElementById('Question').style.display = "block";
// }

function CreateNewGroupsPage (props) {
  const [desc, setDesc] = useState("");
  const [components, setComponents] = useState(["Question 1"]);
  const [componentNames, setComponentNames] = useState(['Question 2', 'Question 3', 'Question 4', 'Question 5', 'Question 6', 'Question 7', 'Question 8','Question 9', 'Question 10']);

  // const actualBtn = document.getElementById('actual-btn');
  // const fileChosen = document.getElementById('file-chosen');

  // actualBtn.addEventListener('change', function(){
  //   fileChosen.textContent = this.files[0].name
// })

  function addComponent() {
    if (componentNames.length > 0) { 
      
      setComponents([...components, componentNames[0]]);
      componentNames.splice(0, 1);
      
    } else { 
      
      window.alert("You've reached the question limit!");
      
    } 
  }

return (
    <>
      <div>
        {props.userId ? (
          <div>
          <div className = "CreateNewGroups-total">
            <b className="CreateNewGroups-header">CREATE NEW GROUP</b>
            <div className="CreateNewGroups-text">Input the name of your group below.</div>
            <input className="CreateNewContainer-inputbox" type="text" placeholder="Enter Answer Here" value={desc} onChange={(e)=>{setDesc(e.target.value)}} />
            <div className="CreateNewGroups-text">Add group profile image below.</div>
            {/* <label for="fileUpload">Upload file</label> */}
            <input type="file" id="actual-btn"/>
            {/* <label className="CreateNewGroups-image" for="actual-btn">Upload File</label> */}
            {/* <span id="file-chosen">No file chosen</span> */}
            <div className="CreateNewGroups-text">Describe your group below.</div>
            <input className="CreateNewContainer-inputbox" type="text" placeholder="Enter Answer Here" value={desc} onChange={(e)=>{setDesc(e.target.value)}} />
            <div className="CreateNewGroups-text">Please list some questions for your prospects below (5 question limit).</div>

            {components.map((item, i) => ( <Question text={item} /> ))} 
            
          </div>
            <div className="CreateNewGroups-line">
              <Button className="CreateNewGroups-container" onClick={addComponent} text="Add Question"/>
              <Link to="/created-groups">
                <div className="CreateNewGroups-container">SUBMIT</div>
              </Link>

            </div>
          </div>
        ) : (
          <div>
            <b className="CreateNewGroups-login">Please log in</b>
          </div>
        )}
      </div>
    </>
  );
}

export default CreateNewGroupsPage;

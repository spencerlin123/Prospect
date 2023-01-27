import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import jwt_decode from "jwt-decode";

import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";

import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

import Navbar from "./Navbar.js";
import Home from "./pages/Home.js";
import JoinedGroups from "./pages/JoinedGroupsPage.js";
import CreatedGroups from "./pages/CreatedGroupsPage.js";
import CreateNewGroups from "./pages/CreateNewGroupsPage.js";
import GroupCode from "./pages/GroupCode.js";
import ProspectsPage from "./pages/ProspectsPage.js";
import IndividualProspectPage from "./pages/IndividualProspectPage.js";

/**
 * Define the "App" component
 */
const App = () => {
  const [userId, setUserId] = useState(undefined);

  const [titles, setTitles] = useState([]);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        setUserId(user._id);
      }
    });
  }, []);

  const handleLogin = (credentialResponse) => {
    const userToken = credentialResponse.credential;
    const decodedCredential = jwt_decode(userToken);
    console.log(`Logged in as ${decodedCredential.name}`);
    console.log(decodedCredential);
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    post("/api/logout");
  };

  return (
    <>
      <Navbar handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} />
      <Router>
        {/* <Skeleton
          path="/login"
          // handleLogin={handleLogin}
          // handleLogout={handleLogout}
          // userId={userId}
        /> */}
        <Home path="/" />
        <NotFound default />
        <JoinedGroups path="/joined-groups" userId={userId} />
        <CreatedGroups path="/created-groups" userId={userId} />
        <CreateNewGroups path="/createnewgroup" userId={userId} />
        <GroupCode path="/entercode" userId={userId} />
        <ProspectsPage path="/created-groups/:group_code" userId={userId} />
        {/* <IndividualProspectPage path="/:individual" /> */}
        {/* {titles.map((title) => (
          <Prospects path={"/created-groups/" + title} userId = {userId}/>
        ))} */}
      </Router>
    </>
  );
};

export default App;

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
import JoinedGroups from "./pages/JoinedGroups.js";

/**
 * Define the "App" component
 */
const App = () => {
  const [userId, setUserId] = useState(undefined);

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
      <Navbar />
      <Router>
        <Skeleton
          path="/login"
          handleLogin={handleLogin}
          handleLogout={handleLogout}
          userId={userId}
        />
        <Home path="/" />
        <NotFound default />
        <JoinedGroups path="/joined-groups" />
      </Router>
    </>
  );
};

export default App;

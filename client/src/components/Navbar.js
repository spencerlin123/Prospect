import React, { useState } from "react";
import { Link } from "@reach/router";
import "./Navbar.css";
import { Button } from "./Button";
import Skeleton from "./pages/Skeleton";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";

const GOOGLE_CLIENT_ID = "712668659687-6iut9vat7u628ka1s6723mvd2ksjg2d7.apps.googleusercontent.com";

function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="fixed">
        <div className="navbar">
          <span className="navbar-logo">
            <Link to="/" className="logo-link">
              <h1 className="navbar-text">PROSPECT</h1>
            </Link>
          </span>
          <span className="navbar">
            <div className="navbar-item">
              <Link to="/created-groups" className="nav-links">
                <div className="navbar-item-text">CREATED GROUPS</div>
              </Link>
            </div>
            <div className="navbar-item">
              <Link to="/joined-groups" className="nav-links">
                <div className="navbar-item-text">JOINED GROUPS</div>
              </Link>
            </div>
            <div className="navbar-item">
              <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
                {props.userId ? (
                  <button
                    className="logout-button"
                    onClick={() => {
                      googleLogout();
                      props.handleLogout();
                    }}
                  >
                    <p>LOGOUT</p>
                  </button>
                ) : (
                  <div className="login-button">
                    <GoogleLogin
                      className="login-button"
                      onSuccess={props.handleLogin}
                      onError={(err) => console.log(err)}
                    />
                  </div>
                )}
              </GoogleOAuthProvider>
              {/* <Link to="/login" className="nav-links-login">
                <div className="navbar-item-text-login">LOGIN</div>
              </Link> */}
            </div>
          </span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

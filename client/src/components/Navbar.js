import React, { useState } from "react";
import { Link } from "@reach/router";
import "./Navbar.css";
import { Button } from "./Button";

function Navbar() {
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
              <Link to="/joinedgroups" className="nav-links">
                <div className="navbar-item-text">JOINED GROUPS</div>
              </Link>
            </div>
            <div className="navbar-item">
              <Link to="/login" className="nav-links-login">
                <div className="navbar-item-text-login">LOGIN</div>
              </Link>
            </div>
          </span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

import React from "react";
import "./App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import "./Button.css";
import { Link } from "@reach/router";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1 className="prospect">PROSPECT</h1>
      <p className="innovative">An Innovative Way to Manage Candidate Pools</p>
      <div className="hero-btns">
        <div className="hero-items">
          <Link to="/entercode" className="hero-links1">
            <span className="hero-links-text1">HAVE A CODE?</span>
          </Link>
          <a href="#down" className="hero-links2">
            <span className="hero-links-text2">ABOUT</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

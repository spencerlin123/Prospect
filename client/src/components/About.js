import React from "react";
import "./App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import "./Button.css";
import { Link } from "@reach/router";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <img src="./Tough Ruck" />
      <div className="blue-box" />
      <text className="about-text">
        Choosing which candidates best suit your organization is undoubtedly a very difficult task.
        Often, qualified candidates slip through the cracks and the process is messy. Prospect was
        created in early 2023 by Spencer Lin, Landon Dolvin, and Ben Ebanks (pictured above left to
        right) to address this problem. Prospect is an innovative way to manage prospect pools by
        enabling an organization to properly view each candidate and ensure they are making informed
        decisions in a systematic and organized manner.
      </text>
    </div>
  );
}

export default About;

import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-header">404 Not Found</h1>
      <p className="not-found-text">The page you requested couldn't be found.</p>
    </div>
  );
};

export default NotFound;

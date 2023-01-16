import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div>
          <Link to="/" className="navbar-logo">
            PROSPECT
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

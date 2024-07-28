import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="nav-container">
      <Link to="/">
        <img
          src="/app-logos/culinary-compass-logo.png"
          alt="Culinary Compass Logo"
        />
      </Link>
      <Link className="transitional" to="/recipes">
        Recipes
      </Link>
      <Link className="transitional" to="/recipes/new">
        Add Recipe
      </Link>
      <Link className="transitional" to="/about">
        About Us
      </Link>
    </div>
  );
}

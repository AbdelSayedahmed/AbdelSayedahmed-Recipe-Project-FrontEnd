import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <h2>ERROR 404: Page not found!</h2>
      <Link to="/">Return Home</Link>
    </div>
  );
}

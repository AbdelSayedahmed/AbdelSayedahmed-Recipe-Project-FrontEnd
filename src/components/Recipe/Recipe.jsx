import React from "react";
import "./Recipe.css";
import { Link } from "react-router-dom";

export default function Recipe({ recipe }) {
  return (
    <Link to={`/recipes/${recipe.id}`}>
      <div className="recipe-container">
        <h2>{recipe.name}</h2>
        <img src={recipe.imageurl} alt="" />
      </div>
    </Link>
  );
}

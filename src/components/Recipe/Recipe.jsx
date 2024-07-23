import React from "react";
import "./Recipe.css";
import { Link } from "react-router-dom";

export default function Recipe({recipe}) {
  const API = 'http://localhost:3012';

  return(<Link to={`/recipes/${recipe.id}`}><div>{recipe.name}</div></Link>);
}

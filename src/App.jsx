// Dependencies
import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Home from "./components/Home/Home.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Recipe from "./components/Recipe/Recipe.jsx";
import RecipeForm from "./components/RecipeForm/RecipeForm.jsx";
import Recipes from "./components/Recipes/Recipes.jsx";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails.jsx";


// Styling
import "./App.css";

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<Recipe />} />
        <Route path="/recipes/:id/edit" element={<RecipeForm />} />
        <Route path="/recipes/new" element={<RecipeForm />} />
      </Routes>
    </>
  );
}

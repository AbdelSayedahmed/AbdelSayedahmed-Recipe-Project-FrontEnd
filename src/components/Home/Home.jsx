import React, { useEffect, useState } from "react";
import {
  getRecipes,
  getRandomRecipes,
  getLatestRecipes,
} from "../../utils/functions.js";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await getRecipes();
        setRecipes(data);
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
  const randomRecipes = getRandomRecipes(recipes);
  const latestRecipes = getLatestRecipes(recipes);

  return (
    <div className="home-container">
      <hr />
      <div className="recipe-of-the-day">
        <h3>Recipe of the Day!</h3>
        <div className="recipe-of-the-day-container">
          {randomRecipe ? (
            <>
              <h2>{randomRecipe.name || "Loading..."}</h2>
              <div className="recipe-of-the-day-container_img-container">
                <img
                  src={randomRecipe.imageurl}
                  alt={`Image of ${randomRecipe?.name}`}
                />
              </div>
              <div className="recipe-of-the-day-container_info">
                <p>{JSON.parse(randomRecipe.instructions).join(" ")}</p>
                <p>Prep Time: {randomRecipe.preparation_time}</p>
                <p>Cooking Time: {randomRecipe.cooking_time}</p>
                <p>Total Time: {randomRecipe.total_time}</p>
                <Link to={`/recipes/${randomRecipe.id}`}>View More</Link>
              </div>
            </>
          ) : (
            "Loading..."
          )}
        </div>
      </div>
      <hr />
      <div className="recipe-list">
        <h3>Featured Recipes</h3>
        <div className="recipe-list-container">
          {randomRecipes.length > 0
            ? randomRecipes.map((recipe) => (
                <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
                  <h2>{recipe.name || "Loading..."}</h2>
                  <div className="recipe-list-container_img-container">
                    <img
                      src={recipe.imageurl}
                      alt={`Image of ${recipe.name}`}
                    />
                  </div>
                </Link>
              ))
            : "Loading..."}
        </div>
      </div>
      <hr />
      <div className="recipe-list">
        <h3>Latest Recipes</h3>
        <div className="recipe-list-container">
          {latestRecipes.length > 0
            ? latestRecipes.map((recipe) => (
                <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
                  <h2>{recipe.name || "Loading..."}</h2>
                  <div className="recipe-list-container_img-container">
                    <img
                      src={recipe.imageurl}
                      alt={`Image of ${recipe.name}`}
                    />
                  </div>
                </Link>
              ))
            : "Loading..."}
        </div>
      </div>
      <hr />
      <div className="check-us-out">
        <h3>Follow </h3>
      </div>
    </div>
  );
}

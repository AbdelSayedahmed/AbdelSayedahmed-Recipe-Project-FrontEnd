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
      <div className="brief-summary">
        <div className="brief-summary-para">
          <h3>Culinary Compass</h3>
          <p>
            Our website is a culinary haven that offers an extensive collection
            of recipes from around the globe, meticulously categorized to suit
            every palate and preference. Whether you're looking for specific
            cuisines, meal types, or recipes that cater to dietary restrictions,
            you'll find an array of options to explore. Each recipe is detailed
            with ingredients, instructions, and images, making it easy for users
            to recreate dishes at home. Beyond just browsing, the platform
            empowers users to contribute their own recipes, edit existing ones,
            and engage with a community of food enthusiasts. This interactive
            feature ensures that the recipe collection is ever-evolving and
            enriched by diverse culinary perspectives.
          </p>
          <p>
            The landing page welcomes visitors with a "Recipe of the Day,"
            offering inspiration and a glimpse into the site's vast culinary
            repertoire. Featured recipes highlight popular or seasonally
            relevant dishes, while the latest recipes section keeps users
            updated with new additions. Towards the end of the page, users can
            connect with the website's social media channels, including
            Facebook, Instagram, TikTok, and Twitter, fostering a vibrant online
            community. These links not only provide updates and additional
            content but also encourage users to share their own culinary
            creations and experiences, making the site a dynamic and engaging
            hub for all things food-related.
          </p>
        </div>
        <div className="brief-summary_img-container">
          <img
            src="https://www.csftw.edu/wp-content/uploads/Types-of-Chefs-1080x675.jpg"
            alt="image of chef"
          />
        </div>
      </div>
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
        <h3>Follow Us</h3>
        <div className="check-us-out-container">
          <div className="icon facebook"></div>
          <div className="icon instagram"></div>
          <div className="icon tiktok"></div>
          <div className="icon twitter"></div>
        </div>
      </div>
    </div>
  );
}

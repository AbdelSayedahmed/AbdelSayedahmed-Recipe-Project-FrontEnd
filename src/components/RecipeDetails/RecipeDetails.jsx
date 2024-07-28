import { Navigate } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./RecipeDetails.css";

export default function RecipeDetails() {
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState({});
  const API = import.meta.env.VITE_API_URL;

  let navigate = useNavigate();
  let { id } = useParams();
  useEffect(() => {
    console.log(API, id);
    fetch(`${API}/recipes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setRecipeDetails(res);
        console.log(res);
      });
  }, [id]);

  function deleteRecipes() {
    fetch(`${API}/recipes/${id}`, { method: `DELETE` })
      .then(() => navigate(`/recipes`))
      .catch((error) => console.error(error));
  }

  return (
    <div className="recipe-details-container">
      <h2>
        {recipeDetails.name}({recipeDetails.origin})
      </h2>
      <img src={recipeDetails.imageurl} alt={recipeDetails.imageurl} />
      <div className="information-container">
        <h5>
          Carbs
          <br />
          {recipeDetails.carbohydrates}
        </h5>
        <h5>
          Protein
          <br />
          {recipeDetails.protein}
        </h5>
        <h5>
          Fat
          <br />
          {recipeDetails.fat}
        </h5>
      </div>
      <div className="time-container">
        <h5>
          Cooking time
          <br />
          {recipeDetails.cooking_time}
        </h5>
        <h5>
          Servings
          <br />
          {recipeDetails.servings}
        </h5>
        <h5>
          Calories_per_serving
          <br />
          {recipeDetails.calories_per_serving}
        </h5>
      </div>
      <h1>Ingredients</h1>
      <div className="ingredients-container">
        <ul>
          {recipeDetails.name
            ? JSON.parse(recipeDetails.ingredients).map((ingredient) => (
                <li>{ingredient.ingredient}</li>
              ))
            : null}
        </ul>
        <ul>
          {recipeDetails.name
            ? JSON.parse(recipeDetails.ingredients).map((ingredient) => (
                <div>{ingredient.amount}</div>
              ))
            : null}
        </ul>
      </div>
      <h1>Instructions</h1>
      <ol className="instructions-container">
        {recipeDetails.name
          ? JSON.parse(recipeDetails.instructions).map((instruction) => (
              <li>{instruction}</li>
            ))
          : null}
      </ol>
      <button className="edit" onClick={() => navigate(`/recipes/${id}/edit`)}>
        Edit Recipe
      </button>
      <button className="delete" onClick={() => setDeleteConfirmation(true)}>
        Delete Recipe
      </button>
      {deleteConfirmation ? (
        <div className="deleteConfirmation">
          <h3>Are you sure that you want to delete this Recipe?</h3>
          <button onClick={deleteRecipes} className="yes">
            yes
          </button>
          <button onClick={() => setDeleteConfirmation(false)} className="no">
            no
          </button>
        </div>
      ) : null}
    </div>
  );
}

import { Navigate } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../RecipeDetails/recipeDetails.css";

export default function RecipeDetails() {
  const [recipeDetails, setrecipeDetails] = useState({});
  const API = import.meta.env.VITE_API_URL;

  let navigate = useNavigate();
  let { id } = useParams();
  useEffect(() => {
    console.log(API, id);
    fetch(`${API}/recipes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setrecipeDetails(res);
        console.log(res);
      });
  }, [id]);

  return (
    <div className="recipedetails-container">
      <h2>{recipeDetails.name}</h2>
      <img src={recipeDetails.imageurl} alt="" />
      {/* <p>{JSON.parse(recipeDetails.ingredients)?JSON.parse(recipeDetails.ingredients):null}</p> */}
      <h3>Ingredients</h3>
      <div className="ingredients-container">
     
        <ul>
          {recipeDetails.imageurl
            ? JSON.parse(recipeDetails.ingredients).map((ingredient) => (
                <div>{ingredient.ingredient}</div>
              ))
            : null}
        </ul>
        <ul>
          {recipeDetails.imageurl
            ? JSON.parse(recipeDetails.ingredients).map((ingredient) => (
                <div>{ingredient.amount}</div>
              ))
            : null}
        </ul>
      </div>

      <h3 >Instructions</h3>

      <ul className="instructions-container">
        {" "}
        {recipeDetails.imageurl
          ? JSON.parse(recipeDetails.instructions).map((instruction) => (
              <div>{instruction}</div>
            ))
          : null}
      </ul>
      {/* {JSON.parse(recipeDetails.instructions).map(instruction=><div>{instruction}</div>)} */}
    </div>
  );
}

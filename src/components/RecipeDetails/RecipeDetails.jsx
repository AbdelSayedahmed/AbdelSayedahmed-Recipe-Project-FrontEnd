import { Navigate } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../RecipeDetails/recipeDetails.css";

export default function RecipeDetails() {
  const [deleteConfirmation,setDeleteConfirmation]=useState(false)
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
      <h2>{recipeDetails.name}({recipeDetails.origin})</h2>
      <img src={recipeDetails.imageurl} alt="" />
      <div className="information-container">
        <h5
        >Carbs
          <br />
          {recipeDetails.carbohydrates}</h5>
        <h5
        >Protein
          <br />
          {recipeDetails.protein}</h5>
        <h5
        >Fat
          <br />
          {recipeDetails. fat}</h5>
     
        
      </div>
      <h3 >Ingredients</h3>
      <div className="ingredients-container">
     
        <ul>
          {recipeDetails.imageurl
            ? JSON.parse(recipeDetails.ingredients).map((ingredient) => (
                <li>{ingredient.ingredient}</li>
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

      <ol className="instructions-container">
      
        {recipeDetails.imageurl
          ? JSON.parse(recipeDetails.instructions).map((instruction) => (
              <li >{instruction}</li>
            ))
          : null}
      </ol>
      <button className="edit" onClick={()=>navigate(`/recipes/${id}/edit`)}>Edit</button>
        <button className="delete" onClick={()=>setDeleteConfirmation(true)}>Delete</button>
        {deleteConfirmation?<div className="deleteConfirmation"> 
        <h3>Are you sure that you want to delete this transaction?</h3>

        <button onClick={()=>setDeleteConfirmation(false)} className="no">no</button>
        <button onClick={()=>{}} className="yes">yes</button>
         </div>:null
        }

    </div>
  );
}

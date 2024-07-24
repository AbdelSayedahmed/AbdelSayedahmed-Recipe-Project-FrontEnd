import  { useEffect, useState } from "react";
import "./Recipes.css";
import Recipe from "../Recipe/Recipe";
export default function Recipes() {
  const [recipes,setRecipes]=useState([])
  const API = import.meta.env.VITE_API_URL;


  useEffect(() => {
    fetch(`${API}/recipes`)
      .then((res) => {
      return res.json()
      })
      .then(resJSON => {
        setRecipes(resJSON)
   
      })
    .catch((error) => console.error(error))
  }, [])

  
  return (<div className="recipes-container">{recipes.map(recipe=><Recipe recipe={recipe}/>)}
    
  </div>);
}

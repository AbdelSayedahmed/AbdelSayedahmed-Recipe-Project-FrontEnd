import  { useEffect, useState } from "react";
import "./Recipes.css";
import Recipe from "../Recipe/Recipe";
export default function Recipes() {
  const [recipes,setRecipes]=useState([])
  const [filterRecipes,setFilterRecipes]=useState([])
  const [cuisine,setCuisine]=useState(``)

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

  let array=[]
 let originArray=[]
  for (let element of recipes){
    if(!array.includes(element.origin)){
      originArray.push(element)

    }
    array.push(element.origin)
    
  }

  const filteredArray=function(){
    let filter=recipes.filter(recipe=>recipe.origin===cuisine)
   console.log(cuisine)

    setFilterRecipes(filter);

  }
  return (
  <>
  <div className="origin-container">
    {...originArray.map(element=><div onClick={()=>{setCuisine(element.origin)
     filteredArray();
}}  className="origin_element-container">
      <img src={element.imageurl} alt="" />
      <h4>{element.origin}</h4>

    </div>)} 



  </div>
  <div className="filter-origin">{filterRecipes.map(el=>{<div>{el.name}</div>})}</div>

  <div className="recipes-container">{recipes.map(recipe=><Recipe recipe={recipe}/>)}
    
  </div></>
  );
}

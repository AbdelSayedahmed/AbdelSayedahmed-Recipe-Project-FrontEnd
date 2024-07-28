import { useEffect, useState } from "react";
import "./Recipes.css";
import Recipe from "../Recipe/Recipe";
import { Link } from "react-router-dom";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [filterRecipes, setFilterRecipes] = useState([]);
  const [cuisine, setCuisine] = useState(``);

  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API}/recipes`)
      .then((res) => {
        return res.json();
      })
      .then((resJSON) => {
        setRecipes(resJSON);
      })
      .catch((error) => console.error(error));
  }, []);

  let array = [];
  let originArray = [];
  for (let element of recipes) {
    if (!array.includes(element.origin)) {
      originArray.push(element);
    }
    array.push(element.origin);
  }

  const filteredArray = function (cuisine) {
    let filter = recipes.filter((recipe) => recipe.origin === cuisine);
    console.log(cuisine);

    setFilterRecipes(filter);
  };
  return (
    <>
      <div className="origin-container">
        {...originArray.map((element) => (
          <div
            onClick={() => {
              setCuisine(element.origin);
              filteredArray(element.origin);
            }}
            className="origin_element-container"
          >
            <div className="origin_element-container-img-container">
              <img src={element.imageurl} alt={`Image of ${element.name}`} />
            </div>
            <h4>{element.origin}</h4>
          </div>
        ))}
      </div>
      <hr className="recipes-container_hr" />

      <div className="filtered-container">
        {filterRecipes.map((recipe, index) => (
          <div className="filtered-recipe">
            <Link to={`/recipes/${recipe.id}`} key={index}>
              <div className="filtered-recipe-img-container">
                <img src={recipe.imageurl} alt={`Image of ${recipe.name}`} />
              </div>
              <div className="filtered-container_recipe-name">
                {recipe.name}
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="filter-origin">
        {filterRecipes.map((el) => {
          <div>{el.name}</div>;
        })}
      </div>
      <hr className="recipes-container_hr" />
      <div className="recipes-container">
        {recipes.map((recipe, index) => (
          <Recipe recipe={recipe} key={index} />
        ))}
      </div>
    </>
  );
}

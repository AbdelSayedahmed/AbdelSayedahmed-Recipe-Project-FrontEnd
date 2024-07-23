import React, { useState } from "react";
import { recipeCategories, countryOrigins } from "../../utils/functions";
import "./NewRecipe.css";
import { useNavigate } from "react-router-dom";
import createRecipe from "../../utils/functions";

export default function NewRecipe() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    ingredients: [],
    instructions: "",
    preparation_time: "",
    cooking_time: "",
    total_time: "",
    servings: "",
    calories_per_serving: "0",
    protein: "Unspecified",
    carbohydrates: "Unspecified",
    fat: "Unspecified",
    imageUrl: "",
    category: "",
    origin: "",
  });

  const [ingredient, setIngredient] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleAddIngredient = (e) => {
    e.preventDefault();
    if (ingredient && quantity && unit) {
      setForm((prevForm) => ({
        ...prevForm,
        ingredients: [...prevForm.ingredients, { ingredient, quantity, unit }],
      }));
      setIngredient("");
      setQuantity("");
      setUnit("");
    }
  };

  const handleDeleteIngredient = (index) => {
    setForm((prevForm) => ({
      ...prevForm,
      ingredients: prevForm.ingredients.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedForm = {
      ...form,
      calories_per_serving: form.calories_per_serving || "Unspecified",
      protein: form.protein || "Unspecified",
      carbohydrates: form.carbohydrates || "Unspecified",
      fat: form.fat || "Unspecified",
    };
    try {
      const newRecipe = await createRecipe(updatedForm);
      navigate(`/transactions/${newRecipe.id}`);
    } catch (error) {
      console.error("Failed to create recipe:", error);
    }
    console.log(updatedForm);
  };

  return (
    <div className="new-recipe-container">
      <h2>Create your own Recipe</h2>
      <form onSubmit={handleSubmit} className="new-recipe-container_main-form">
        <div className="new-recipe-container_column-left">
          <label htmlFor="name">
            Name:{" "}
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label htmlFor="instructions">
            Instructions: <br />
            <textarea
              id="instructions"
              name="instructions"
              value={form.instructions}
              onChange={handleChange}
              required
            />
          </label>
          <div className="new-recipe-container_ingredients">
            <h4>Ingredients</h4>
            <div className="new-recipe-container_ingredients_form">
              <div>
                <label htmlFor="ingredient">
                  Ingredient:{" "}
                  <input
                    type="text"
                    id="ingredient"
                    name="ingredient"
                    value={ingredient}
                    onChange={(e) => setIngredient(e.target.value)}
                  />
                </label>
                <label htmlFor="quantity">
                  Quantity:{" "}
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </label>
                <label htmlFor="unit">
                  Unit:{" "}
                  <input
                    type="text"
                    id="unit"
                    name="unit"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                  />
                </label>
              </div>
              <button type="button" onClick={handleAddIngredient}>
                Add Ingredient
              </button>
            </div>
            <ul>
              {form.ingredients.map((ing, index) => (
                <li key={index}>
                  {ing.quantity} {ing.unit} of {ing.ingredient}{" "}
                  <button
                    type="button"
                    onClick={() => handleDeleteIngredient(index)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="new-recipe-container_times">
            <h4>Times</h4>
            <div className="new-recipe-container_times_form">
              <label htmlFor="preparation_time">
                Preparation Time:{" "}
                <input
                  type="text"
                  id="preparation_time"
                  name="preparation_time"
                  value={form.preparation_time}
                  onChange={handleChange}
                  required
                />
              </label>
              <label htmlFor="cooking_time">
                Cooking Time:{" "}
                <input
                  type="text"
                  id="cooking_time"
                  name="cooking_time"
                  value={form.cooking_time}
                  onChange={handleChange}
                  required
                />
              </label>
              <label htmlFor="total_time">
                Total Time:{" "}
                <input
                  type="text"
                  id="total_time"
                  name="total_time"
                  value={form.total_time}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
          </div>
        </div>
        <div className="new-recipe-container_column-right">
          <div className="new-recipe-container_facts">
            <h4>Nutritional Facts</h4>
            <div className="new-recipe-container_facts_form">
              <label htmlFor="servings">
                Servings:{" "}
                <input
                  type="text"
                  id="servings"
                  name="servings"
                  value={form.servings}
                  onChange={handleChange}
                  required
                />
              </label>
              <label htmlFor="calories_per_serving">
                Calories per Serving:{" "}
                <input
                  type="number"
                  id="calories_per_serving"
                  name="calories_per_serving"
                  value={form.calories_per_serving}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="protein">
                Protein:{" "}
                <input
                  type="text"
                  id="protein"
                  name="protein"
                  value={form.protein}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="carbohydrates">
                Carbohydrates:{" "}
                <input
                  type="text"
                  id="carbohydrates"
                  name="carbohydrates"
                  value={form.carbohydrates}
                  onChange={handleChange}
                />{" "}
              </label>
              <label htmlFor="fat">
                Fat:{" "}
                <input
                  type="text"
                  id="fat"
                  name="fat"
                  value={form.fat}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <div className="new-recipe-container_type">
            <h4>Recipe Information</h4>
            <div className="new-recipe-container_type_form">
              <label htmlFor="category">
                Category:{" "}
                <select
                  id="category"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  {recipeCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </label>
              <label htmlFor="origin">
                Origin:{" "}
                <select
                  id="origin"
                  name="origin"
                  value={form.origin}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select an origin
                  </option>
                  {countryOrigins.map((origin) => (
                    <option key={origin} value={origin}>
                      {origin}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
          <div className="new-recipe-container_img">
            <h4>Upload Image</h4>
            <label htmlFor="imageUrl">
              Image URL:{" "}
              <input
                type="text"
                id="imageUrl"
                name="imageUrl"
                value={form.imageUrl}
                onChange={handleChange}
                required
              />
            </label>
          </div>
        </div>
        <div className="submit-button-container">
          <button type="submit">Create Recipe</button>
        </div>
      </form>
    </div>
  );
}

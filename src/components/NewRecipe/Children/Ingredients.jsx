import React from "react";

export default function Ingredients({
  form,
  handleChange,
  ingredient,
  setIngredient,
  quantity,
  setQuantity,
  unit,
  setUnit,
  handleAddIngredient,
  handleDeleteIngredient,
}) {
  return (
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
            <button type="button" onClick={() => handleDeleteIngredient(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

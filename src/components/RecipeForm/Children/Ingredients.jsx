import React from "react";

export default function Ingredients({
  form,
  handleChange,
  ingredient,
  setIngredient,
  amount,
  setAmount,
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
          <label htmlFor="amount">
            amount:{" "}
            <input
              type="number"
              id="amount"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
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
            {ing.amount} {ing.unit} of {ing.ingredient}{" "}
            <button type="button" onClick={() => handleDeleteIngredient(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

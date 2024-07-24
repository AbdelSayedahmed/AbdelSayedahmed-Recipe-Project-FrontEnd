import React from "react";

export default function NutritionalFacts({ form, handleChange }) {
  return (
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
          />
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
  );
}

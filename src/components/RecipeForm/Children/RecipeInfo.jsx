import React from "react";
import { recipeCategories, countryOrigins } from "../../../utils/functions";

export default function RecipeInfo({ form, handleChange }) {
  return (
    <div className="new-recipe-container_type">
      <h4>Recipe Information</h4>
      <div className="new-recipe-container_type_form">
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
  );
}

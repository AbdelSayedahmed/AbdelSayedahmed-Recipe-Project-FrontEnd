import React from "react";

export default function Times({ form, handleChange }) {
  return (
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
  );
}

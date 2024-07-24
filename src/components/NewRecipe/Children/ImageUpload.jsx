import React from "react";

export default function ImageUpload({ form, handleChange }) {
  return (
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
  );
}

import React from "react";

export default function ImageUpload({ form, handleChange }) {
  return (
    <div className="new-recipe-container_img">
      <h4>Upload Image</h4>
      <label htmlFor="imageurl">
        Image URL:{" "}
        <input
          type="text"
          id="imageurl"
          name="imageurl"
          value={form.imageurl}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

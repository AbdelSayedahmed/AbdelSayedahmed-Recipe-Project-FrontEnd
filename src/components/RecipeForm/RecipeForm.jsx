import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createRecipe, getRecipe } from "../../utils/functions";
import RecipeInfo from "./Children/RecipeInfo";
import Ingredients from "./Children/Ingredients";
import Times from "./Children/Times";
import NutritionalFacts from "./Children/NutritionalFacts";
import ImageUpload from "./Children/ImageUpload";
import "./RecipeForm.css";

export default function RecipeForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [form, setForm] = useState({
    name: "",
    ingredients: [],
    instructions: "",
    preparation_time: "",
    cooking_time: "",
    total_time: "",
    servings: "",
    calories_per_serving: "",
    protein: "",
    carbohydrates: "",
    fat: "",
    imageUrl: "",
    category: "",
    origin: "",
  });

  const [ingredient, setIngredient] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");

  useEffect(() => {
    if (id) {
      const fetchRecipe = async () => {
        try {
          const recipe = await getRecipe(id);
          setForm(recipe);
        } catch (error) {
          console.error("Failed to fetch recipe:", error);
        }
      };
      fetchRecipe();
    }
  }, [id]);

  const splitInstructions = (instructions) =>
    instructions.split(". ").map((a) => a + ".");

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
      instructions: splitInstructions(form.instructions),
      calories_per_serving: form.calories_per_serving || "0",
      protein: form.protein || "Unspecified",
      carbohydrates: form.carbohydrates || "Unspecified",
      fat: form.fat || "Unspecified",
    };
    try {
      const newRecipe = await createRecipe(updatedForm);
      navigate(`/recipes/${newRecipe.id}`);
    } catch (error) {
      console.error("Failed to create recipe:", error);
    }
  };

  return (
    <div className="new-recipe-container">
      <h2>{id ? "Edit your Recipe" : "Create your own Recipe"}</h2>
      <form onSubmit={handleSubmit} className="new-recipe-container_main-form">
        <div className="new-recipe-container_column-left">
          <RecipeInfo form={form} handleChange={handleChange} />
          <Ingredients
            form={form}
            handleChange={handleChange}
            ingredient={ingredient}
            setIngredient={setIngredient}
            quantity={quantity}
            setQuantity={setQuantity}
            unit={unit}
            setUnit={setUnit}
            handleAddIngredient={handleAddIngredient}
            handleDeleteIngredient={handleDeleteIngredient}
          />
          <Times form={form} handleChange={handleChange} />
        </div>
        <div className="new-recipe-container_column-right">
          <NutritionalFacts form={form} handleChange={handleChange} />
          <ImageUpload form={form} handleChange={handleChange} />
        </div>
        <div className="submit-button-container">
          <button type="submit">
            {id ? "Update Recipe" : "Create Recipe"}
          </button>
        </div>
      </form>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createRecipe, getRecipe, updateRecipe } from "../../utils/functions";
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
    imageurl: "",
    category: "",
    origin: "",
  });

  const [ingredient, setIngredient] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    if (id) {
      const fetchRecipe = async () => {
        try {
          const recipe = await getRecipe(id);
          const parsedIngredients = JSON.parse(recipe.ingredients);
          const parsedInstructions = JSON.parse(recipe.instructions).join(" ");
          setForm({
            ...recipe,
            ingredients: parsedIngredients,
            instructions: parsedInstructions,
          });
        } catch (error) {
          console.error("Failed to fetch recipe:", error);
        }
      };
      fetchRecipe();
    }
  }, [id]);

  const splitInstructions = (instructions) =>
    instructions
      .split(". ")
      .map((instr) => instr.trim())
      .filter((instr) => instr);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleAddIngredient = (e) => {
    e.preventDefault();
    if (ingredient && amount) {
      setForm((prevForm) => ({
        ...prevForm,
        ingredients: [...prevForm.ingredients, { ingredient, amount }],
      }));
      setIngredient("");
      setAmount("");
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
      instructions: JSON.stringify(splitInstructions(form.instructions)),
      ingredients: JSON.stringify(form.ingredients),
      calories_per_serving: form.calories_per_serving || "0",
      protein: form.protein || "Unspecified",
      carbohydrates: form.carbohydrates || "Unspecified",
      fat: form.fat || "Unspecified",
    };
    try {
      let recipe;
      if (id) {
        recipe = await updateRecipe(id, updatedForm);
      } else {
        recipe = await createRecipe(updatedForm);
      }
      navigate(`/recipes/${recipe.id}`);
    } catch (error) {
      console.error("Failed to submit recipe:", error);
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
            amount={amount}
            setAmount={setAmount}
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

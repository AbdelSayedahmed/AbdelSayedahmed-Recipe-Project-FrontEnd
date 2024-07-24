const URL = import.meta.env.VITE_API_URL;

export const recipeCategories = [
  "Appetizers",
  "Baking",
  "Beef",
  "Beverages",
  "Breads",
  "Breakfast",
  "Brunch",
  "Casseroles",
  "Desserts",
  "Dips",
  "Dressings",
  "Grilled",
  "Holiday",
  "Instant Pot",
  "International",
  "Keto",
  "Lamb",
  "Low-Carb",
  "Main Courses",
  "Paleo",
  "Pasta",
  "Pork",
  "Poultry",
  "Rice",
  "Salads",
  "Sauces",
  "Seafood",
  "Sides",
  "Slow Cooker",
  "Snacks",
  "Soups",
  "Vegetarian",
  "Vegan",
];

export const countryOrigins = [
  "American",
  "Argentinian",
  "Australian",
  "Brazilian",
  "British",
  "Canadian",
  "Chinese",
  "Cuban",
  "Egyptian",
  "Ethiopian",
  "Filipino",
  "French",
  "German",
  "Greek",
  "Indian",
  "Indonesian",
  "Italian",
  "Jamaican",
  "Japanese",
  "Korean",
  "Lebanese",
  "Malaysian",
  "Mexican",
  "Moroccan",
  "Peruvian",
  "Portuguese",
  "Russian",
  "South African",
  "Spanish",
  "Swedish",
  "Thai",
  "Turkish",
  "Vietnamese",
];

export async function createRecipe(recipe) {
  const options = {
    method: "POST",
    body: JSON.stringify(recipe),
    headers: { "Content-Type": "application/json" },
  };
  try {
    const response = await fetch(`${URL}`, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error creating recipe:", error);
    throw error;
  }
}

export async function getRecipe(id) {
  try {
    const response = await fetch(`${URL}/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching recipe:", error);
    throw error;
  }
}

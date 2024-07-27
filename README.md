# Culinary Compass

Culinary Compass is a web application designed to provide an extensive collection of recipes from around the world. Users can browse, contribute, and edit recipes while engaging with a community of food enthusiasts.

## Project Structure

```
root
├── public/
│   └── contains all images and redirect file
├── src/
│   ├── components/
│   │   ├── AboutUs/
│   │   │   ├── AboutUs.jsx
│   │   │   └── AboutUs.css
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.css
│   │   ├── Nav/
│   │   │   ├── Nav.jsx
│   │   │   └── Nav.css
│   │   ├── NotFound/
│   │   │   ├── NotFound.jsx
│   │   │   └── NotFound.css
│   │   ├── Recipe/
│   │   │   ├── Recipe.jsx
│   │   │   └── Recipe.css
│   │   ├── RecipeDetails/
│   │   │   ├── RecipeDetails.jsx
│   │   │   └── RecipeDetails.css
│   │   ├── RecipeForm/
│   │   │   ├── RecipeForm.jsx
│   │   │   ├── RecipeForm.css
│   │   │   └── children/
│   │   │       ├── ImageUpload.jsx
│   │   │       ├── Ingredients.jsx
│   │   │       ├── NutritionalFacts.jsx
│   │   │       ├── RecipeInfo.jsx
│   │   │       └── Times.jsx
│   │   ├── Recipes/
│   │   │   ├── Recipes.jsx
│   │   │   └── Recipes.css
│   ├── utils/
│   │   └── functions.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Running the Project

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/culinary-compass.git
   cd culinary-compass
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the project**:

   ```bash
   npm run dev
   ```

4. **Build the project**:

   ```bash
   npm run build
   ```

5. **Preview the production build**:
   ```bash
   npm run preview
   ```

## Dependencies

- React
- React Router DOM
- Vite

## Features

- **Home Page**: Displays a brief summary of the website, a "Recipe of the Day," featured recipes, latest recipes, and links to social media channels.
- **Navigation Bar**: Provides links to the Home, Recipes, Add Recipe, and About Us pages.
- **Recipe Management**: Allows users to view recipe details, create new recipes, edit existing recipes, and delete recipes.
- **Community Engagement**: Users can connect with the website's social media channels to share their culinary creations and experiences.

## API

The application interacts with a backend API to perform CRUD operations on recipes. Ensure to set the `VITE_API_URL` environment variable in a `.env` file at the root of the project to point to your backend API.

```env
VITE_API_URL=https:/************.com
```

## Color Pallet:

- Deep Blue: #202334
- Cyan: #3D5F82
- Sunkist Orange: #C67E10
- Light Orange: #F6C46D
- Khaki: #E1D3B6

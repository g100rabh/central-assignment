import React, { useState } from "react";
import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import { recipes } from "./data";

import "./App.css";

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeClick = (recipe) => {
    console.log(recipe, "app");
    setSelectedRecipe(recipe);
  };

  const handleBackClick = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="App">
      <Header />
      {selectedRecipe ? (
        <RecipeDetail recipe={selectedRecipe} onBackClick={handleBackClick} />
      ) : (
        <RecipeList recipes={recipes} onRecipeClick={handleRecipeClick} />
      )}
    </div>
  );
}

export default App;

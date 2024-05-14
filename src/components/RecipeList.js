import React from "react";
import RecipeCard from "./RecipeCard";
import styles from "./RecipeList.module.css";

function RecipeList({ recipes, onRecipeClick }) {
  console.log(recipes, "recipeLiist<<<<<<<<<");
  return (
    <div className={styles.recipeList}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} onClick={onRecipeClick} />
      ))}
    </div>
  );
}

export default RecipeList;

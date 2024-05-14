import React from "react";
import styles from "./RecipeCard.module.css";

function RecipeCard({ recipe, onClick }) {
  return (
    <div className={styles.recipeCard} onClick={() => onClick(recipe)}>
      <h2>{recipe.title}</h2>
    </div>
  );
}

export default RecipeCard;

import React from "react";
import styles from "./RecipeDetail.module.css";

function RecipeDetail({ recipe, onBackClick }) {
  return (
    <div className={styles.recipeDetail}>
      <button className={styles.backButton} onClick={onBackClick}>
        Back
      </button>
      <h2>{recipe.title}</h2>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetail;

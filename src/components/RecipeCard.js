import React from 'react';
import { Summary } from './summary'

export const RecipeCard = (props) => {
  const recipe = props.recipe
  return (
    <article>
      <img src={recipe.image} title={recipe.title} alt={recipe.title}/>
      <h3>{recipe.title}</h3>
      <p>Prep time: {recipe.readyInMinutes} minutes</p>
      <Summary>{recipe.summary}</Summary>
      <p>Source: <a href={recipe.sourceUrl}>{recipe.sourceName}</a></p>
      <a href={recipe.sourceUrl}>View recipe</a>
    </article> 
  )
}
import React from 'react';
import { RichText } from './RichText'

export const RecipeCard = (props) => {
  const recipe = props.recipe

  return (
    <article>
      <img src={recipe.image} title={recipe.title} alt={recipe.title}/>
      <h2>{recipe.title}</h2>
      <p>Prep time: {recipe.readyInMinutes} minutes</p>
      <RichText>{recipe.summary}</RichText>
      <p>Source: <a href={recipe.sourceUrl}>{recipe.sourceName}</a></p>
      <a href={recipe.sourceUrl} target="blank">View recipe</a>
    </article> 
  )
}
import React, { useState, useEffect } from 'react'

const App = () => {
  const [recipe, setRecipe] = useState({})
  const [error, setError] = useState(null)

  async function fetchRecipe() {
    const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY
    fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=1`)
      .then(res => res.json())
      .then(
        (res) => { 
          if (res.status === "failure") {
            setError(res)
          } else {
            setRecipe(res.recipes[0])
          }
         }
      )
      .catch(error => setError(error))
  }

  useEffect(()=> {
    fetchRecipe()
  },[])

  if(error) {
    return <div>Error: {error.message}</div>
  }
  return (
    <div>
      <header>
        <h1>Random Recipe generator</h1>
      </header>
      <article>
        <img src={recipe.image} title={recipe.title} alt={recipe.title}/>
        <h3>{recipe.title}</h3>
        <p>Prep time: {recipe.readyInMinutes} minutes</p>
        <p>{recipe.summary}</p>
        <p>Source: <a href={recipe.sourceUrl}>{recipe.sourceName}</a></p>
        <a href={recipe.sourceUrl}>View recipe</a>
      </article> 
      <footer>
        <p>Recipes powered by <a href="https://spoonacular.com/food-api/">spoonacular API</a></p>
      </footer>
    </div>
  )
};

export default App;

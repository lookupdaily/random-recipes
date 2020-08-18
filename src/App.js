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
      <button>Show me another recipe</button>
      <article>
        <img src="" title="recipe image" alt="recipe"/>
        <h3>Recipe title</h3>
        <p>Prep time: time here</p>
        <p>summary here</p>
        <p>Source: <a href="#">source here</a></p>
        <p>List of cuisines here</p>
        <a href="#">View recipe</a>
      </article> 
      <footer>
        <p>Recipes powered by <a href="https://spoonacular.com/food-api/">spoonacular API</a></p>
      </footer>
    </div>
  )
};

export default App;

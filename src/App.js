import React, { useState, useEffect } from 'react';
import { RecipeCard } from './components/RecipeCard';
import { ErrorHandler } from './components/ErrorHandler'

const App = () => {
  const [recipe, setRecipe] = useState({});
  const [error, setError] = useState(null);

  async function fetchRecipe() {
    const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
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
  };

  useEffect(()=> {
    fetchRecipe();
  },[]);
  
  return (
    <div>
      <header>
        <h1>Random Recipe generator</h1>
      </header>
      <ErrorHandler error={error}/>
      <RecipeCard recipe={recipe}/>
      <button onClick={fetchRecipe}>Next recipe</button>
      <footer>
        <p>Recipes powered by <a href="https://spoonacular.com/food-api/">spoonacular API</a></p>
      </footer>
    </div>
  );
};

export default App;

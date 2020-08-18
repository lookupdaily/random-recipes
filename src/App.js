import React from 'react'

const App = () => {
  return (
    <div>
      <header>
        <h1>Random Recipe generator</h1>
      </header>
      <button>Show me another recipe</button>
      <article>
        <img src="" title="recipe image" alt="recipe"/>
        <h3>Recipe Title</h3>
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

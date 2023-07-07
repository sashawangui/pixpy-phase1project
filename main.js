function displayRecipes(){
    let recipes = document.createElement("div")
    recipes.className="recipes"
    if (recipes.id % 2 === 0){
        recipes.innerHTML=`
        <div class="left"><img src="${recipes.image}"></div>
        <div class="right><h2>${recipes.title}</h2>
        <p>Cooking time: ${recipes.cookTime}</p>
        <p>Prep Time : ${recipes.prepTime}</p>
        <p>Servings : ${recipes.servings}
        <p>${recipes.description}</p>
        <p>Ingredients: ${recipes.ingredients}</p>
        <p> Steps:${recipes.instructions}
        </div>`
    }
    else{
        recipes.innerHTML=
        `<div class="right"><img src="${recipes.image}"></img></div>
        <div class="left> <h2>${recipes.title}</h2>
        <p>Cooking time: ${recipes.cookTime}</p>
        <p>Prep Time : ${recipes.prepTime}</p>
        <p>Servings : ${recipes.servings}
        <p>${recipes.description}</p>
        <p>Ingredients: ${recipes.ingredients}</p>
        <p> Steps:${recipes.instructions}
        </div>
        `
    }
        document.querySelector("#recipesContainer").appendChild(recipes)
    }

    
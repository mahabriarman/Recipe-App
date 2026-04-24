const Serachbox = document.querySelector(".SerachBox")
const Serachbtn = document.querySelector(".serachBtn")
const RecipeContainer = document.querySelector(".recipe-container")
const recipeDetailContent = document.querySelector(".recipe-detail-content")
const RecipeCloseBtn = document.querySelector(".recipe-close-btn")

const fetchRecipe = async(query)=>{
    RecipeContainer.innerHTML="<h2>Fetching Recipes...</h2>"

    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    const response = await data.json()

    RecipeContainer.innerHTML=""

    if(!response.meals){
        RecipeContainer.innerHTML="<h2>No recipes found</h2>"
        return
    }

    response.meals.forEach(meal => {
        const recipediv = document.createElement('div')
        recipediv.classList.add('recipe')

        recipediv.innerHTML=`
        <img src="${meal.strMealThumb}"/>
        <h3>${meal.strMeal}</h3>
        <p><span>${meal.strArea}</span> Dish</p>
        <p>Belong to <span>${meal.strCategory}</span> Category</p>
        `

        const button = document.createElement('button')
        button.textContent="View Recipe"

        button.addEventListener("click", ()=>{
            openRecipePopup(meal)
        })

        recipediv.appendChild(button)
        RecipeContainer.appendChild(recipediv)
    });
}

const fetchIngredients =(meal)=>{
    let Ingredeients=""
    
}

const openRecipePopup=(meal)=>{
    recipeDetailContent.innerHTML=`
    <h2>${meal.strMeal}</h2>
    <h3>Ingredeients : </h3>
    <ul>${fetchIngredients(meal)}</u>
    
    
    `
    document.querySelector(".recipe-detail").style.display="block"
}

RecipeCloseBtn.addEventListener("click", ()=>{
    document.querySelector(".recipe-detail").style.display="none"
})

Serachbtn.addEventListener("click",(e)=>{
    e.preventDefault()
    const serachInput = Serachbox.value.trim()
    fetchRecipe(serachInput)
})
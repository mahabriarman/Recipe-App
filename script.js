const Serachbox = document.querySelector(".SerachBox")
const Serachbtn = document.querySelector(".serachBtn")
const RecipeContainer = document.querySelector(".recipe-container")


const fetchRecipe = async(qurey)=>{
    RecipeContainer.innerHTML="<h2>Fetahing Recipes.....<h2>"
     const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${qurey}`)
     const response = await data.json()

     RecipeContainer.innerHTML=""
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
        recipediv.appendChild(button)
        RecipeContainer.appendChild(recipediv)
    });
    }

    
Serachbtn.addEventListener("click" ,(e) => {
    e.preventDefault()
    const serachInput = Serachbox.value.trim()
    fetchRecipe(serachInput)
   

    
})
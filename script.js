const Serachbox = document.querySelector(".SerachBox")
const Serachbtn = document.querySelector(".serachBtn")
const RecipeContainer = document.querySelector(".recipe-container")


const fetchRecipe = async(qurey)=>{
     const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${qurey}`)
     const response = await data.json()
    response.meals.forEach(meal => {
        const recipediv = document.createElement('div')
        recipediv.classList.add('recipe')
        recipediv.innerHTML=`
        <img src="${meal.strMealThumb}"/>
        <h3>${meal.strMeal}</h3>
        <p>${meal.strArea}</p>
        <p>${meal.strCategory}</p>
        `
        RecipeContainer.appendChild(recipediv)
    });
    }

Serachbtn.addEventListener("click" ,(e) => {
    e.preventDefault()
    const serachInput = Serachbox.value.trim()
    fetchRecipe(serachInput)
   

    
})
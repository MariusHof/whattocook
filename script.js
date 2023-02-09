let getRandomRecipeButton = document.getElementById('randomRecButton'),
    apis = ['https://themealdb.com/api/json/v1/1/categories.php','https://themealdb.com/api/json/v1/1/list.php?a=list','https://themealdb.com/api/json/v1/1/list.php?i=list'],
    searchIngreditents,
    searchAreas,
    searchCategories,
    apiResponse,
    apiData
;

async function getRandomRecipe() {
    const response = await fetch('https://themealdb.com/api/json/v1/1/random.php');
    const data = await response.json();
    
    document.getElementById("recipeName").innerHTML = data.meals[0].strMeal;
    document.getElementById("recipeImg").src = data.meals[0].strMealThumb;

    console.log(data);
    return data;
}

async function getFilterList(apiURL) {
    const response = await fetch(apiURL);
    const data = await response.json();
    // error handling!
    console.log(data);
    return data;
}

getRandomRecipeButton.addEventListener('click', getRandomRecipe);

for(var i = 0; i < apis.length; i++){
    getFilterList(apis[i])
}




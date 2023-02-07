let getRandomRecipeButton = document.getElementById('randomRecButton')

async function getRandomRecipe() {
    const response = await fetch('https://themealdb.com/api/json/v1/1/random.php');
    const data = await response.json();
    
    document.getElementById("recipeName").innerHTML = data.meals[0].strMeal;
    document.getElementById("recipeImg").src = data.meals[0].strMealThumb;

    console.log(data);
    return data;
}

getRandomRecipeButton.addEventListener('click', getRandomRecipe);

// getRandomRecipeButton.addEventListener('click',  function (event) {
    
//     console.log('clicked')

//     let button = event.target

//     // fetch random recipe from API
//     fetch('https://themealdb.com/api/json/v1/1/random.php'
//     // , {options --> method, body, ... }
//     )
//     .then(res => {
//         if(res.ok){
//            console.log('Success')
//         } else {
//             console.log('Not successful')
//         }
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log('Error: Something went wrong with the connection'))
   
// })


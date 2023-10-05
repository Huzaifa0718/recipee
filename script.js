let box = document.getElementById("dish")
let x = document.getElementById("text")

let recipee = () => {
let Dish = box.value;
if(Dish.length == 0){
  x.innerHTML = `<h1>enter the dish</h1>`
}
else{
let p = fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + Dish +"&" )
p.then( response => response.json())
.then((data) => {
  console.log(data)
  
  for(i=0;i< data.meals.length;i++){
      console.log(data.meals[i].strMeal)
      console.log(data.meals[i].strArea)
  console.log(data.meals[i].strIngredient1,data.meals[i].strMeasure1)
    console.log(data.meals[i].strIngredient2,data.meals[i].strMeasure2)
    console.log(data.meals[i].strIngredient3,data.meals[i].strMeasure3)
    console.log(data.meals[i].strIngredient4,data.meals[i].strMeasure4)
    console.log(data.meals[i].strIngredient5,data.meals[i].strMeasure5)
    console.log(data.meals[i].strIngredient6,data.meals[i].strMeasure6)
console.log(data.meals[i].strIngredient7,data.meals[i].strMeasure7)
    console.log(data.meals[i].strIngredient8,data.meals[i].strMeasure8)
    console.log(data.meals[i].strIngredient9,data.meals[i].strMeasure9)
  console.log(data.meals[i].strIngredient10,data.meals[i].strMeasure10)
    console.log(data.meals[i].strIngredient11,data.meals[i].strMeasure11)
    console.log(data.meals[i].strIngredient12,data.meals[i].strMeasure12)
    console.log(data.meals[i].strIngredient13,data.meals[i].strMeasure13)
    console.log(data.meals[i].strIngredient14,data.meals[i].strMeasure14)
    console.log(data.meals[i].strIngredient15,data.meals[i].strMeasure15)
    console.log(data.meals[i].strIngredient16,data.meals[i].strMeasure16)
    console.log(data.meals[i].strIngredient17,data.meals[i].strMeasure17)
               console.log(data.meals[i].strIngredient18,data.meals[i].strMeasure18)
      console.log(data.meals[i].strIngredient19,data.meals[i].strMeasure19)
    console.log(data.meals[i].strInstructions)

    
  }
})
}
}



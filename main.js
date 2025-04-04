/*
// Lessong 5 practice
let numbers = [5, 10, 15, 20];
let total = 0;
numbers.forEach(num => total += num);
console.log(total);

 let filteredNumbers = numbers.filter(num => num < 10);
console.log(filteredNumbers);

let doubled = numbers.map(num => num * 2);
console.log(doubled);

let ages = [16, 21, 17, 18, 25, 14];
let minors = ages.filter(age => age < 18);
console.log(minors);

let adults = ages.filter(age => age > 21);
console.log(adults);
*/

/*
Complete each of the following tasks by writing code to manipulate the provided arrays.
Your solution should only use the array methods covered in the lesson: push(), pop(), unshift(), shift(), includes(), indexOf(), lastIndexOf(), concat(), slice(), splice(), sort(), and reverse().
Submit the final version of the arrays as specified after each task.
*/


//Task 1: Using forEach()
//1. Create an array of five of your favorite cities.
let cities = ["Tokyo", "Taipei", "Paris", "Milan", "Seoul"];

//2. Use forEach( ) to log each city name to the console in uppercase.
cities.forEach((cities) => {
    console.log(cities.toUpperCase());
})

//3. Submit the output format by adding comments to the code.
// Output:
// TOKYO
// TAIPEI
// PARIS
// MILAN
// SEOUL


//Task 2: Transforming with map()
//1. Create an array called numbers with the numbers 1-5.
let numbers = [1, 2, 3, 4, 5];

//2. Use map( ) to create an array where each number is squared. Call this array squares.
let arraySquares = numbers.map((num) => num * num);

//3. Log the new array.
console.log(arraySquares);

//4. Submit the output by adding comments to the code.
// Output:
// [1, 4, 9, 16, 25]


//Task 3: Filtering with filter()
//1. Create an array called scores containing the numbers 85, 42, 90, 75, 30, and 100.
let scores = [85, 42, 90, 75, 30, 100];

//2. Use filter ( ) to create a new array containing only the scores greater than or equal to 80. Call this array highScores.
let highScores = scores.filter((score) => score >= 80);

//3. Log the new array.
console.log(highScores);

//4. Submit the output by adding comments to the code.
//Output: 85, 90, 100]


//Task 4: Finding with find() and findIndex()
//1. Create an array called favoriteFood that contains a list of your favorite dishes. Try to add 5 or 6 elements.
let favoriteFood = ["Ramen", "Sushi", "Pasta", "Tacos", "Pizza", "Hotpot"];

//2. Use find() to locate the first food with more than 4 letters.
let foodFound = favoriteFood.find((food) => food.length > 4);
console.log(foodFound);

//3. Use findIndex( ) to find the index of that fruit
let foodIndex = favoriteFood.findIndex((food) => food.length > 4);
console.log(foodIndex); 

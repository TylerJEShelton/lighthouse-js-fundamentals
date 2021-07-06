// function laugh() {
//   return "hahahahahahahahahaha!";
// }

// console.log(laugh());

// function laugh(num) {
//   let laughs = "";
//   for (i = 1; i <= num; i++) {
//     laughs += "ha";
//   }
//   laughs += "!";
//   return laughs;
// }
// console.log(laugh(3));


// // returns the sum of two numbers
// function add(x, y) {
//   return x + y;
// }


// // returns the value of a number divided by 2
// function divideByTwo(num) {
//   return num / 2;
// }


// var sum = add(5, 7); // call the "add" function and store the returned value in the "sum" variable
// var average = divideByTwo(sum); // call the "divideByTwo" function and store the returned value in the "average" variable

// console.log("The sum is " + sum + " and the average is " + average + ".");

// function addTen(x) {
//   return x + 10;
// }

// function divideByThree(y) {
//   return y / 3;
// }

// var result = addTen(2);
// console.log(divideByThree(result));

// function makeLine(length) {
//   var line = "";
//   for (var j = 1; j <= length; j++) {
//     line += "* "
//   }
//   return line + "\n";
// }

// function buildTriangle(baseWidth) {
//   let triangle = [];  // empty array to store the rows of stars for the triangle

//   for (triangleRow = 1; triangleRow <= baseWidth; triangleRow++) {
//     triangle += makeLine(triangleRow);  // add each row of stars to build the triangle
//   }
//   return triangle;

// }

// console.log(buildTriangle(10));

// var catSays = function (max) {
//   var catMessage = "";
//   for (var i = 0; i < max; i++) {
//     catMessage += "meow ";
//   }
//   return catMessage;
// };

// console.log(catSays);

// // Function expression that assigns the function displayFavorite 
// // to the variable favoriteMovie
// var favoriteMovie = function displayFavorite(movieName) {
//   console.log("My favorite movie is " + movieName);
// };

// // Function declaration that has two parameters: a function for displaying
// // a message, along with a name of a movie
// function movies(messageFunction, name) {
//   messageFunction(name);
// }

// // Call the movies function, pass in the favoriteMovie function and name of movie
// movies(favoriteMovie, "Finding Nemo");

// Function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
// function games(messageFunction, name) {
//   messageFunction(name);
// }

// // Call the movies function, pass in the function and name of movie
// games(function displayFavorite(gameName) {
//   console.log("My favorite video game is " + gameName);
// }, "Days Gone");

var laugh = function (num) {
  let laughs = "";
  for (i = 1; i <= num; i++) {
    laughs += "ha";
  }
  laughs += "!";
  return laughs;
}
console.log(laugh(10));

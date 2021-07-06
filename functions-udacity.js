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
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}

function buildTriangle(baseWidth) {
  let triangle = [];

  for (triangleRow = 1; triangleRow <= baseWidth; triangleRow++) {
    triangle += makeLine(triangleRow);
  }
  return triangle;

}

console.log(buildTriangle(10));

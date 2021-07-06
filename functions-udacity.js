// function laugh() {
//   return "hahahahahahahahahaha!";
// }

// console.log(laugh());

function laugh(num) {
  let laughs = "";
  for (i = 1; i <= num; i++) {
    laughs += "ha";
  }
  laughs += "!";
  return laughs;
}
console.log(laugh(3));
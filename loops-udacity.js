// let x = 1;

// while (x <= 10000) {
//   console.log(x + " mississippi!");
//   x++;
// }

// var start = 0; // when to start
// while (start < 10) { // when to stop
//   console.log(start);
//   start = start + 2; // how to get to the next item
// }

// var x = 10;
// while (x <= 25) {
//   console.log('Printing out x = ' + x);
//   x = x + 2;
// }

// var x = 1;

// while (x <= 20) {
//   if (x % 3 === 0 && x % 5 === 0) {
//     console.log("JuliaJames");
//   } else if (x % 3 === 0) {
//     console.log("Julia");
//   } else if (x % 5 === 0) {
//     console.log("James");
//   } else {
//     console.log(x);
//   }
//   x++;
// }

var num = 99;

while (num >= 1) {
  if (num === 2) {
    console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num - 1) + " bottle of juice on the wall!");
  } else if (num === 1) {
    console.log(num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!");
  } else {
    console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!");
  }
  num--;
}

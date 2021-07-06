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

// var num = 99;

// while (num >= 1) {
//   if (num === 2) {
//     console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num - 1) + " bottle of juice on the wall!");
//   } else if (num === 1) {
//     console.log(num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!");
//   } else {
//     console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!");
//   }
//   num--;
// }


// let tSeconds = 60;

// while (tSeconds >= 0) {
//   if (tSeconds === 50) {
//     console.log("Orbiter transfers from ground to internal power");
//   } else if (tSeconds === 31) {
//     console.log("Ground launch sequencer is go for auto sequence start");
//   } else if (tSeconds === 16) {
//     console.log("Activate launch pad sound suppression system");
//   } else if (tSeconds === 10) {
//     console.log("Activate main engine hydrogen burnoff system");
//   } else if (tSeconds === 6) {
//     console.log("Main engine start");
//   } else if (tSeconds === 0) {
//     console.log("Solid rocket booster ignition and liftoff!");
//   } else {
//     console.log("T-" + tSeconds + " seconds");
//   }
//   tSeconds--;
// }

// for (let i = 0; i < 6; i++) {
//   console.log("Printing out i = " + i);
// }

// for (let x = 0; x < 5; x++) {
//   for (let y = 0; y < 3; y++) {
//     console.log(x + "," + y);
//   }
// }

// let solution = 12;

// for (let num = (solution - 1); num > 0; num--) {
//   solution *= num;
// }

// console.log(solution);

let numOfRows = 26;
let numOfSeats = 100;

for (let row = 0; row < numOfRows; row++) {
  for (let seat = 0; seat < numOfSeats; seat++) {
    console.log(row + "-" + seat);
  }
}
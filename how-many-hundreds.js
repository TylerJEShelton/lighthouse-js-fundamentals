function howManyHundreds(bottles) {
  let containers = 0;

  // round down to the nearest 100 to get containers entirely filled with 100 bottles of maple syrup.
  containers = Math.floor(bottles / 100);

  return containers;
}



console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
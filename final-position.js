const finalPosition = function (moves) {
  // Your code in here ...
  let currentPosition = [0, 0];

  for (let move of moves) {
    if (move === "north") {
      currentPosition[1] += 1;
    } else if (move === "south") {
      currentPosition[1] -= 1;
    } else if (move === "east") {
      currentPosition[0] += 1;
    } else {
      currentPosition[0] -= 1;
    }
  }

  return currentPosition;

}

const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']

console.log(finalPosition(moves));

// correct result should be :
// [-1, 4]
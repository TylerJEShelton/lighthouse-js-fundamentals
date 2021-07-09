const smartGarbage = function (trash, bins) {
  // Your code in here ...

  if (trash === "recycling") {
    bins[trash]++;
  } else if (trash === "waste") {
    bins[trash]++;
  } else {
    bins[trash]++;
  }

  return bins;

}

console.log(smartGarbage("recycling", { waste: 4, recycling: 2, compost: 5 }));
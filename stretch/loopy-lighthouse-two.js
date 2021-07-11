function loopyLighthouse(range, multiples, words) {
  var x = range[0];
  const concatenatedWords = words[0] + words[1];

  while (x <= range[1]) {
    if (x % multiples[0] === 0 && x % multiples[1] === 0) {
      console.log(concatenatedWords);
    } else if (x % multiples[0] === 0) {
      console.log(words[0]);
    } else if (x % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(x);
    }
    x++;
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
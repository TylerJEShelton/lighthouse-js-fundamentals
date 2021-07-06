const whichSchool = function (age) {
  if (age < 13) {
    // children under the age of 13 will go to Elementary School
    return "Elementary School";
  } else if (age >= 13 && age <= 18) {
    // teens between the age of 13 (inclusive) and 18 (inclusive) will go to Secondary School
    return "Secondary School";
  } else {
    // all other people older than 18 will go to Lighthouse Labs.
    return "Lighthouse Labs";
  }
}

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));
function ageCalculator(name, yearOfBirth, currentYear) {
  // calculate the age by subtracting year they were born from the current year.
  let age = currentYear - yearOfBirth;

  return (name + " is " + age + " years old.");
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));

// correct response should look like the below example:
// "Suzie is 32 years old."
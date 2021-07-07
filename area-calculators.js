function calculateRectangleArea(length, width) {
  // Check to ensure that both values are greater than or equal to 0
  f(length <= 0 || width <= 0) {
    return
  }

  let area = length * width;

  return area;
}

function calculateTriangleArea(base, height) {
  // Check to ensure that both values are greater than or equal to 0
  if (base <= 0 || height <= 0) {
    return
  }
  let area = base * height / 2;

  return area;
}

function calculateCircleArea(radius) {
  // Check to ensure that radius is greater than or equal to 0
  if (radius <= 0) {
    return
  }
  let pi = 3.141592653589793238462643;

  let area = pi * Math.pow(radius, 2);

  return area;
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
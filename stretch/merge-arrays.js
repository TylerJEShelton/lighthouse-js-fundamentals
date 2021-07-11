function merge(array1, array2) {
  // this function will merge the two arrays that are passed into the function into a single array and return it

  // merge the two arrays together
  const mergedArray = array1.concat(array2);
  // sort the merged array
  mergedArray.sort();
  // return the sorted array
  return mergedArray;

}

console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);
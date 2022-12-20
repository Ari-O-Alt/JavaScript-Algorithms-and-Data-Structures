/* Problem: build a function that takes two strings an in input and determines if for every value in the first array, there's a squared correspondent value in the second array. The frequnecy is important so this means if we have 2 values of 3 in the first array, we should have exactly 2 values of 9 in the second.
 */

// Refactored approach - O(1)
const frequencyCounter = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }
  const mappedArray1 = {};
  const mappedArray2 = {};

  for (let value1 of array1) {
    mappedArray1[value1] = (mappedArray1[value1] || 0) + 1;
  }

  for (let value2 of array2) {
    mappedArray2[value2] = (mappedArray2[value2] || 0) + 1;
  }

  for (let property in mappedArray1) {
    if (!(property ** 2 in mappedArray2)) {
      return false;
    }

    if (mappedArray2[property ** 2] !== mappedArray1[property]) {
      return false;
    }
  }

  return true;
};

// TESTS
console.log(frequencyCounter([4, 3, 3], [16, 9, 9])); // returns true
console.log(frequencyCounter([4, 3, 3], [16, 9, 9, 10])); // returns false
console.log(frequencyCounter([], [])); // returns true

// Typescript solution
/* const frequencyCounter = (array1: [], array2: []): boolean => {

if (array1.length !== array2.length) {
   return false
}
  const mappedArray1 = {};
  const mappedArray2 = {};

  for (let value1 of array1) {
    mappedArray1[value1] = (mappedArray1[value1] || 0) + 1
  }

  for (let value2 of array2) {
    mappedArray2[value2] = (mappedArray2[value2] || 0) + 1
  }
  
  for (let property in mappedArray1) {
    if (!(property ** 2 in mappedArray2)) {
    return false
    }
    
    if (mappedArray2[property ** 2] !== mappedArray1[property]) {
    return false
    }
  }
  

  return true
}; */

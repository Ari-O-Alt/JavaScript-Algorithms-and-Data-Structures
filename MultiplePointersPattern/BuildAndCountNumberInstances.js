/**
 * Create a function that takes a sorted array of numbers as input and builds and returns the number of values fund in that array
 * ONLY WORKS with sorted arrays
 */

const buildAndCountNumberInstances = (arrayOfNumbers) => {
  const firstPointer = 0;

  for (
    let secondPointer = 1;
    secondPointer < arrayOfNumbers.length;
    secondPointer++
  ) {
    if (arrayOfNumbers[firstPointer] !== arrayOfNumbers[secondPointer]) {
      firstPointer++;
      arrayOfNumbers[firstPointer] = arrayOfNumbers[secondPointer];
    }
  }

  return firstPointer + 1;
};

// TESTS
buildAndCountNumberInstances([1, 2]); // returns 2
buildAndCountNumberInstances([]); // returns 0
buildAndCountNumberInstances([1, 1, 1, 1, 1, 1]); // returns 1

// TYPESCRIPT VERSION
/* const buildAndCountUniqueInstances = (arrayOfNumbers: number[]): number => {
  const firstPointer: number = 0;
  
  for (let secondPointer = 1; secondPointer < arrayOfNumbers.length; secondPointer++) {
      if (arrayOfNumbers[firstPointer] !== arrayOfNumbers[secondPointer]) {
       firstPointer++
       arrayOfNumbers[firstPointer] = arrayOfNumbers[secondPointer]
      } 
  }
  
  return firstPointer + 1;
}; */


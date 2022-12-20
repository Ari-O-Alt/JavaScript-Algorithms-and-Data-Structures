/**
 * Create a function that takes a sorted array of number as input
 * Return the first pair of number who's sum is equal to zero
 * Returns null if no two number matching the condition are found
 */

// Naive solution - O(n*n)
const findZeroSum = (arrayOfNumbers) => {
  for (let i = 0; i <= arrayOfNumbers.length; i++) {
    for (let j = 1; j <= arrayOfNumbers.length; j++) {
      if (arrayOfNumbers[i] + arrayOfNumbers[j] === 0) {
        return [arrayOfNumbers[i], arrayOfNumbers[j]];
      }
    }

    return [];
  }
};

// TESTS
console.log(findZeroSum([-2, -1, 2, 4])); // returns [-2, 2]
console.log(findZeroSum([-2, -1, 0])); // returns [0, 0]
console.log(findZeroSum([-2, -1])); // returns []
console.log(findZeroSum([])); // returns []

// TYPESCRIPT VERSION
/* const findZeroSum = (arrayOfNumbers: number[]): number[] => {
    for (let i = 0; i <= arrayOfNumbers.length; i++) {
      for (let j = 1; j <= arrayOfNumbers.length; j++) {
        if (arrayOfNumbers[i] + arrayOfNumbers[j] === 0) {
          return [arrayOfNumbers[i], arrayOfNumbers[j]];
        }
      }
  
      return [];
    }
  };
 */

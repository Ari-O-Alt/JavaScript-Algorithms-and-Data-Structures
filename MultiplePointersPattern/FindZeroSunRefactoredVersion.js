/**
 * Create a function that takes a sorted array of number as input
 * Return the first pair of number who's sum is equal to zero
 * Returns null if no two number matching the condition are found
 */

// Refactored solution - O(n)
const findZeroSum = (arrayOfNumbers) => {
  const start = 0;
  const end = arrayOfNumbers.length - 1;

  while (start < end) {
    if (arrayOfNumbers[start] + arrayOfNumbers[end] === 0) {
      return [arrayOfNumbers[start], arrayOfNumbers[end]];
    } else if (arrayOfNumbers[start] + arrayOfNumbers[end] < 0) {
      start++;
    } else {
      end++;
    }
  }

  return [];
};

// TESTS
console.log(findZeroSum([-2, -1, 2, 4])); // returns [-2, 2]
console.log(findZeroSum([-2, -1, 0])); // returns [0, 0]
console.log(findZeroSum([-2, -1])); // returns []
console.log(findZeroSum([])); // returns []

// TYPESCRIPT VERSION
/* const findZeroSum = (arrayOfNumbers: number[]): number[]=> {
    const start: number = 0
    const end: number = arrayOfNumbers.length -1
    
    while (start < end) {
       if (arrayOfNumbers[start] + arrayOfNumbers[end] === 0) {
        return [arrayOfNumbers[start], arrayOfNumbers[end] ]
       } else if (arrayOfNumbers[start] + arrayOfNumbers[end] < 0) {
           start ++
       } else {
       end ++
       }
    }
    
  return []
  
  } */

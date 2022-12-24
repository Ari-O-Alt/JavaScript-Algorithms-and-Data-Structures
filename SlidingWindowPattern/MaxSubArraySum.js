/**
 * Create a function that takes as parameters an array of numbers and an "n" number
 * The function should return the biggest sum of consecutive "n" numbers and null if the array is shorter than "n"
 */

const maxSubArraySum = (arrayOfNumbers, n) => {
  if (n > arrayOfNumbers.length) {
    return null;
  }

  const maxSum = 0;
  const temporarySum = 0;

  // we find the sum of the first consecutive "n" numbers
  for (let i = 0; i < n; i++) {
    maxSum += arrayOfNumbers[i];
  }

  // we make the temporarySum to be the sum of the first n added numbers and we use it as a refrence
  temporarySum = maxSum;

  for (let j = n; j < arrayOfNumbers.length; j++) {
    // for each iterration we remove from the temporarySum the first number of the subarray and we add number found at the current index
    temporarySum = temporarySum - arrayOfNumbers[j - n] + arrayOfNumbers[j];
    maxSum = Math.max(maxSum, temporarySum);
  }

  return maxSum;
};

// TESTS
buildAndCountNumberInstances([1, 2, 7, 8, 41, 2, 13], 2); // returns 49
buildAndCountNumberInstances([], 2); // returns null
buildAndCountNumberInstances([1, 1, 1, 1, 1, 1], 6); // returns 6

// TYPESCRIPT VERSION
/* const maxSubArraySum = (arrayOfNumbers: number[], n: number): number => {
    if (n > arrayOfNumbers.length ) {
    return null
    }
   
   const maxSum = 0;
   const temporarySum = 0;
   
   // we find the sum of the first consecutive "n" numbers
   for (let i = 0; i < n; i++) {
      maxSum += arrayOfNumbers[i]
   }
   
   temporarySum = maxSum
   
    for (let j = n; j < arrayOfNumbers.length; j++) {
    temporarySum = temporarySum - arrayOfNumbers[j-n] + arrayOfNumbers[j]
    maxSum = Math.max(maxSum, temporarySum)
    }
    
    return maxSum
    
    }
 */

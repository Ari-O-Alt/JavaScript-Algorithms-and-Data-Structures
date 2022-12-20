/* Problem: build a function that takes two strings an in input and determines if for every value in the first array, there's a squared correspondent value in the second array. The frequnecy is important so this means if we have 2 values of 3 in the first array, we should have exactly 2 values of 9 in the second.
 */

// Naive approach - O(n*n)

const frequencyCounter = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let value of array1) {
    const correspondentIndex = array2.indexOf(value ** 2);
    if (correspondentIndex === -1) {
      return false;
    } else {
      array2.splice(correspondentIndex, 1);
    }
  }

  return true;
};

// TESTS
console.log(frequencyCounter([1, 2, 3, 3], [1, 4, 9, 9])); // returns true
console.log(frequencyCounter([1, 2, 3, 3], [1, 4, 9])); // returns false
console.log(frequencyCounter([], [])); // returns true

// TYPESCRIPT VERSION

/* const frequencyCounter = (array1: [], array2: []): boolean => {
    if (array1.length !== array2.length) {
      return false 
    }
    
    for (let value of array1) {
      const correspondentIndex: number = array2.indexOf(value ** 2);
      if (correspondentIndex === -1) {
       return false;
      } else {
       array2.splice(correspondentIndex, 1);
      }
  
    }
    
    return true
  } */

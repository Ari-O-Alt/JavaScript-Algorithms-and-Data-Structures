/**
 * Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
   Your solution MUST have the following complexities:
   Time: O(N)
 */

const sameDigitsAndFrequency = (number1, number2) => {
  // convert numbers into arrays
  const number1ToString = number1.toString();
  const number2ToString = number2.toString();

  // if numbers (now strings) don't have the same length, return false
  if (number1ToString.length !== number2ToString.length) {
    return false;
  }

  const number1AsObject = {};
  const number2AsObject = {};

  // loop over the first number (now a string) and populate an object which has the numbers as keys and their frequency as values
  for (let value1 of number1ToString) {
    number1AsObject[value1] = (number1AsObject[value1] || 0) + 1;
  }

  for (let value2 of number2ToString) {
    number2AsObject[value2] = (number2AsObject[value2] || 0) + 1;
  }

  // we check if the values in the first object are the same as the values as in the second object
  for (let key in number1AsObject) {
    // if the key doesn't exist in the second object or if the key in the first object doesn't have the same value as the key in the second object
    if (
      !number2AsObject[key] ||
      number1AsObject[key] !== number2AsObject[key]
    ) {
      return false;
    }

    return true;
  }
};

// TESTS
sameDigitsAndFrequency(182, 281); // true
sameDigitsAndFrequency(34, 14); // false
sameDigitsAndFrequency(3589578, 5879385); // true
sameDigitsAndFrequency(22, 222); // false

// TYPESCRIPT VERSION
/* const sameDigitsAndFrequency = (number1: number, number2: number): boolean => {
    // convert numbers into arrays
    const number1ToString: string = number1.toString();
    const number2ToString: string = number2.toString();
  
    // if numbers (now strings) don't have the same length, return false
    if (number1ToString.length !== number2ToString.length) {
      return false;
    }
  
    const number1AsObject = {};
    const number2AsObject = {};
  
    // loop over the first number (now a string) and populate an object which has the numbers as keys and their frequency as values
     for (let value1 of number1ToString) {
      number1AsObject[value1] = (number1AsObject[value1] || 0) + 1;
    }
    
    
     for (let value2 of number2ToString) {
      number2AsObject[value2] = (number2AsObject[value2] || 0) + 1;
    }
    
    console.log(number1AsObject, number2AsObject)
  
    for (let value in number1AsObject) {
      if (
        !number2AsObject[value] ||
        number1AsObject[value] !== number2AsObject[value]
      ) {
        return false;
      }
  
      return true;
    }
  }; */

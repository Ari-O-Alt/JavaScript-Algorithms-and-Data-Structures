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
  for (let i = 0; i < number1ToString; i++) {
    number1AsObject[i] = (number1ToString[i] || 0) + 1;
  }

  for (let value in number1AsObject) {
    if (
      !number2AsObject[value] ||
      number1AsObject[value] !== number2AsObject[value]
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

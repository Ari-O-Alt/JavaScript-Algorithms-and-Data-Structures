/**
 * Create a function that given two strings, it determines if they are anagrams or not
 * Anagram = a word or a phase which can be formed by rearranging the letters of another word or phrase
 * For this function, we can asume the input is only one word strings, lowercase, no punctuation (so no white spaces, question marks, quotes etc)
 */

const areStringsAnagrams = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false;
  }

  const string1AsObject = {};
  const string2AsObject = {};

  for (let value of string1) {
    string1AsObject[value] = (string1AsObject[value] || 0) + 1;
  }

  for (let secondValue of string2) {
    string2AsObject[secondValue] = (string2AsObject[secondValue] || 0) + 1;
  }

  for (let property in string1AsObject) {
    if (!string2AsObject[property]) {
      return false;
    }
    if (string1AsObject[property] !== string2AsObject[property]) {
      return false;
    }
  }

  return true;
};

// TESTS
console.log(areStringsAnagrams("banana", "banaan")); // returns true
console.log(areStringsAnagrams("", "")); // returns true
console.log(areStringsAnagrams("banana", "bananaaaaa")); // return false

// TYPESCRIPT VERSION
/* const areStringsAnagrams = (string1: string, string2: string): boolean => {
  if (string1.length !== string2.length) {
    return false;
  }

  const string1AsObject = {};
  const string2AsObject = {};

  for (let value of string1) {
    string1AsObject[value] = (string1AsObject[value] || 0) + 1;
  }

  for (let secondValue of string2) {
    string2AsObject[secondValue] = (string2AsObject[secondValue] || 0) + 1;
  }

  for (let property in string1AsObject) {
    if (!string2AsObject[property]) {
      return false;
    }
    if (string1AsObject[property] !== string2AsObject[property]) {
      return false;
    }
  }

  return true;
}; */

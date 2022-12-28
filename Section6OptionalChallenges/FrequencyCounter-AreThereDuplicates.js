/**
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 */

// FREQUENCY COUNTER SOLUTION
const areThereDuplicates = (arg1, arg2, arg3, ...n) => {
  if (arguments.length === 0) {
    return "false";
  }

  const argumentsAsObjects = {};

  for (let value of arguments) {
    argumentsAsObjects[value] = (argumentsAsObjects[value] || 0) + 1;
  }

  console.log(argumentsAsObjects);

  for (let property in argumentsAsObjects) {
    if (argumentsAsObjects[property] > 1) {
      return true;
    }

    return false;
  }
};

// MULTIPLE POINTERS SOLUTION

// TESTS
areThereDuplicates(1, 2, 3); // returns false
areThereDuplicates(1, 2, 2); // returns true
areThereDuplicates("a", "b", "c", "a"); // returns true

// FREQUENCY COUNTER SOLUTION - TYPESCRIPT VERSION
/* const areThereDuplicates = (arg1, arg2, arg3, ...n: number [] | string[]): boolean => {
    if (arguments.length === 0) {
      return false;
    }
  
    const argumentsAsObjects = {};
  
    for (let value of arguments) {
      argumentsAsObjects[value] = (argumentsAsObjects[value] || 0) + 1;
    }
  
    for (let property in argumentsAsObjects) {
      if (argumentsAsObjects[property] > 1) {
        return true;
      }
  
      return false;
    }
  };
 */
// MULTIPLE POINTERS SOLUTION - TYPESCRIPT VERSION

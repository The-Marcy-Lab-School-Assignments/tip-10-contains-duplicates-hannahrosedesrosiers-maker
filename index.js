/**
 * Write a function named containsDuplicate that takes an array of integers (nums) as input 
 * and returns true if any value appears at least twice in the array, and false if every element is distinct.
 *
 * Problem: Given an integer array nums, return true if any value appears at least twice in the array, 
 * and return false if every element is distinct.
 *
 * Examples:
 * - containsDuplicate([1,2,3,1]) → true
 * - containsDuplicate([1,2,3,4]) → false  
 * - containsDuplicate([1,1,1,3,3,4,3,2,4,2]) → true
 */

const containsDuplicate = (nums) => {
  const freq = {}
  //empty object to keep track of frequency
  for (let num of nums) {
    if (freq[num]) {
      // checks if the number is already int the object
      return true
      //if it is in the object already its a dupe so true is printed
    } else {
      freq[num] = 1
      // if not it is added to the freq objest with a value of one since its the first time we see it
    }
  }
  return false
  // no dupes are found so false s printed
  //write your code here
};

// another wat to do it using sets
// const dupe = new Set()
//   // a set is an object that cant store copies(no duplicates)
//   for (let num of nums) {
//     if(dupe.has(num)) {
//       // this checks if the set already has that number
//       return true
//     }
//     dupe.add(num)
//     //this adds the number to the set if it wasnt already there
//   }
//   return false
//   // no duplicates, every one is different so false


// Export the function for testing
module.exports = { containsDuplicate };

// Example usage (commented out to avoid interference with tests)
// console.log(containsDuplicate([1,2,3,1])); // → true
// console.log(containsDuplicate([1,2,3,4])); // → false
// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // → true
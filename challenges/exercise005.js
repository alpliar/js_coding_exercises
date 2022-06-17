/**
 * Get number following given number in given array
 * @param {Array<number>} nums - A list of numbers
 * @param {number} num - A number
 * @returns {number}
 */
const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
};

/**
 * Get the number of occurence of 1 & 0 in given string
 * @param {string} str - A list of numbers
 * @returns {{ 0: number, 1: number}}
 */
const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

/**
 * Get the reverse of a given number (ex: 123 -> 321)
 * @param {number} n - A number
 * @returns {number}
 */
const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
};

/**
 * Get the total sum of the numbers in all sub arrays
 * @param {Array<Array<number>>} arrs - A list of lists of numbers
 * @returns {number}
 */
const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

/**
 * Get a copy of given array, with first & last entries swapped
 * @param {Array<number>} arr - A list of numbers
 * @returns {Array<number>}
 */
const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

/**
 * Determines if any of the properties of an object contain the specified string
 * @param {Object} haystack - An object
 * @param {string} searchTerm - search term
 * @returns {boolean}
 */
const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

/**
 * Get frequencies of each word of a given sentence
 * @param {str} str - A sentence
 * @returns {Object}
 */
const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies,
};

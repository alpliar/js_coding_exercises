/**
 * Get square of given numbers
 * @param {Array<number>} nums - List of numbers
 * @returns {Array<number>}
 */
const getSquares = (nums) => {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
};

/**
 * Converts given list of words to a camel-case string
 * @param {Array<string>} words - List of words
 * @returns {string}
 */
const camelCaseWords = (words) => {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
};

/**
 * Determines how many subjects given people have
 * @param {{ name: string, subjects: Array<string> }} people - A list of people
 * @returns {Array<string>}
 */
const getTotalSubjects = (people) => {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
};

/**
 * Determines if given menu contains given ingredient
 * @param {Array<{name: string, ingredients: Array<string>}>} menu - A list of meals
 * @param {string} ingredient - The ingredient name to lookup for
 * @returns {boolean}
 */
const checkIngredients = (menu, ingredient) => {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
};

/**
 * Get numbers that appears in both given arrays
 * @param {Array<number>} arr1 - First array to compare
 * @param {Array<number>} arr2 - Second array to compare
 * @returns {Array<number>}
 */
const duplicateNumbers = (arr1, arr2) => {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
};

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers,
};

/**
 * Get numbers smaller than 1 in given array
 * @param {Array<number>} nums - A list of numbers
 * @returns {Array<number>}
 */
const findSmallNums = (nums) => {
  if (!nums) throw new Error("nums is required");
  // Your code here
};

/**
 * Get names beginning with given character
 * @param {Array<string>} names - A list of names
 * @param {string} char - The char that names should start with
 * @returns {Array<string>}
 */
const findNamesBeginningWith = (names, char) => {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
};

/**
 * Get verbs (starts with 'to ') from a list of words
 * @param {Array<string>} words - A list of words
 * @returns {Array<string>}
 */
const findVerbs = (words) => {
  if (!words) throw new Error("words is required");
  // Your code here
};

/**
 * Get integers from a list of numbers
 * @param {Array<number>} nums - A list of numbers
 * @returns {Array<number>}
 */
const getIntegers = (nums) => {
  if (!nums) throw new Error("nums is required");
  // Your code here
};

/**
 * Get a list of cities names from a list of users
 * @param {Array<User>} users - A list of users
 * @returns {Array<string>}
 */
const getCities = (users) => {
  if (!users) throw new Error("users is required");
  // Your code here
};

/**
 * Get square root of given numbers
 * @param {Array<number>} nums - List of numbers
 * @returns {Array<number>}
 */
const getSquareRoots = (nums) => {
  if (!nums) throw new Error("nums is required");
  // Your code here
};

/**
 * Get sentences that contains given string
 * @param {Array<string>} sentences - List of sentences
 * @param {string} str - String to find
 * @returns {Array<string>}
 */
const findSentencesContaining = (sentences, str) => {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
};

/**
 * Get the longest side of each set of triangle data
 * @param {Array<Array<number>>} triangles - List of triangles data
 * @returns {Array<number>}
 */
const getLongestSides = (triangles) => {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
};

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides,
};

/**
 * An user
 * @typedef {Object} User
 * @property {number} id - User's id
 * @property {Data} data - Person's city
 */

/**
 * A city
 * @typedef {Object} City
 * @property {number} id - City's id
 * @property {string} displayName - City's name
 * @property {number} age - Person's age
 */

/**
 * An user's data
 * @typedef {Object} UserData
 * @property {City} city - User's city
 */

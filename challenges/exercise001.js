/**
 * Capitalizes a string (ex: "hello" => "Hello")
 * @param {string} word - The word to capitalize.
 * @return {string}
 */
const capitalize = (word) => {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
};

/**
 * Converts a person's name to initials (ex: ("Roger","Sterling") => "R.S")
 * @param {string} firstName - Person's firstname.
 * @param {string} lastName - Person's lastname.
 * @return {string}
 */
const generateInitials = (firstName, lastName) => {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!
};

/**
 * Adds VAT to a given price using given VAT rate
 * @param {number} originalPrice - The original price (tax-free).
 * @param {number} vatRate - The VAT rate (expressed as percentage) to apply (ex: 20 for 20% VAT).
 * @return {number}
 */
const addVAT = (originalPrice, vatRate) => {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
};

/**
 * Gets price after reduction
 * @param {number} originalPrice - The original price (tax-free).
 * @param {number} reduction - The reduction (expressed as percentage) to apply (ex: 50 for 50% discount).
 * @return {number}
 */
const getSalePrice = (originalPrice, reduction) => {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
};

/**
 * Gets the middle character of a given string
 * @param {string} str - String to process
 * @return {string}
 */
const getMiddleCharacter = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
};

/**
 * Reverses letters in a given word
 * @param {string} word - Word to reverse
 * @return {string}
 */
const reverseWord = (word) => {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
};

/**
 * Reverses letters of a given list of words
 * @param {string} words - Words to reverse
 * @return {string}
 */
const reverseAllWords = (words) => {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
};

/**
 * Returns the number of given users that are Linux users
 * @param {Array<User>} users - List of users
 * @return {number}
 */
const countLinuxUsers = (users) => {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
};

/**
 * Returns the mean score of given scores
 * @param {number[]} scores - List of scores
 * @return {number}
 */
const getMeanScore = (scores) => {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
};

/**
 * Checks if a number is divisible by 3 or 5
 * @param {number} n - Number to check
 * @return {string|number}
 */
const simpleFizzBuzz = (n) => {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
};

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz,
};

/**
 * An operating-system user
 * @typedef {Object} User
 * @property {string} name - User name
 * @property {string} OS - Operating system name
 * @property {string} type - Type of operating system.
 */

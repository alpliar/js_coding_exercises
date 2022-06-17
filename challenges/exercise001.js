const capitalize = (word) => {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
};

const generateInitials = (firstName, lastName) => {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!
};

const addVAT = (originalPrice, vatRate) => {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
};

const getSalePrice = (originalPrice, reduction) => {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
};

const getMiddleCharacter = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
};

const reverseWord = (word) => {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
};

const reverseAllWords = (words) => {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
};

const countLinuxUsers = (users) => {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
};

const getMeanScore = (scores) => {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
};

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

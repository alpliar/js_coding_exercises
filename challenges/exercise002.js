/**
 * Get fillings from given sandwich
 * @param {{ bread: string, fillings: Array<string>, accompaniment: string }} sandwich - A sandwich
 */
const getFillings = (sandwich) => {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
};

/**
 * Check if a person is from Manchester
 * @param {{ name: string, city: string, age: number }} person - A person
 */
const isFromManchester = (person) => {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
};

/**
 * Determines how many buses are required for given number of people (a bus can hold 40 people)
 * @param {number} people - Number of people to transport
 */
const getBusNumbers = (people) => {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
};

/**
 * Determines how many sheeps given array contains
 * @param {Array<string>} arr - List of animal names
 */
const countSheep = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

/**
 * Determines if given person has a postcode starting with M
 * @param {{ name: string, age: number: address: { line1: string, city: string, postCode: string}}} person - A person
 */
const hasMPostCode = (person) => {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
};

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode,
};

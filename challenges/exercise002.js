/**
 * Get fillings from given sandwich
 * @param {{ bread: string, fillings: Array<string>, accompaniment: string }} sandwich - A sandwich
 * @return {Array<string>}
 */
const getFillings = (sandwich) => {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
  return sandwich.fillings;
};

/**
 * Check if a person is from Manchester
 * @param {{ name: string, city: string, age: number }} person - A person
 * @return {boolean}
 */
const isFromManchester = (person) => {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  return person.city === "Manchester";
};

/**
 * Determines how many buses are required for given number of people (a bus can hold 40 people)
 * @param {number} people - Number of people to transport
 * @return {number}
 */
const getBusNumbers = (people) => {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  return Math.ceil(people / 40);
};

/**
 * Determines how many sheeps given array contains
 * @param {Array<string>} arr - List of animal names
 * @return {number}
 */
const countSheep = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  return arr.filter((animal) => animal === "sheep").length;
};

/**
 * Determines if given person has a postcode starting with M
 * @param {{ name: string, age: number: address: { line1: string, city: string, postCode: string}}} person - A person
 * @return {boolean}
 */
const hasMPostCode = (person) => {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  return (
    person.address.postCode.startsWith("M") &&
    person.address.city === "Manchester"
  );
};

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode,
};

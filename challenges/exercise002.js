const getFillings = (sandwich) => {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
};

const isFromManchester = (person) => {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
};

const getBusNumbers = (people) => {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
};

const countSheep = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

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

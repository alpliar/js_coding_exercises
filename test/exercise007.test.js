const { sumDigits } = require("../challenges/exercise007");

describe("sumDigits", () => {
  test("returns given number if there is only one digit", () => {
    expect(sumDigits(0)).toBe(0);
    expect(sumDigits(1)).toBe(1);
    expect(sumDigits(7)).toBe(7);
  });
  test("returns correct sum", () => {
    expect(sumDigits(1234)).toBe(10);
    expect(sumDigits(12341234)).toBe(20);
    expect(sumDigits(123123123123)).toBe(12);
    expect(sumDigits(1234567890)).toBe(45);
  });
});

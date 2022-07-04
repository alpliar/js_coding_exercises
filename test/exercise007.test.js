const { sumDigits, createRange } = require("../challenges/exercise007");

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

describe("createRange", () => {
  test("returns correct range from 3 to 11 with step of 2", () => {
    expect(createRange(3, 11, 2)).toBe([3, 5, 7, 9, 11]);
  });
  test("returns correct range from 0 to 11 with explicit step of 1", () => {
    expect(createRange(0, 11, 1)).toBe([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  });
  test("returns correct range from 0 to 11 without explicit step", () => {
    expect(createRange(0, 11)).toBe([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  });
  test("returns correct range from 0 to 100 with step of 25", () => {
    expect(createRange(0, 100, 25)).toBe([0, 25, 50, 75, 100]);
  });
  test("returns correct range if start and end are equals", () => {
    expect(createRange(0, 0, 25)).toBe([0]);
  });
});

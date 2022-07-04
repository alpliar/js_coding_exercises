const { sumMultiples } = require("../challenges/exercise006");

describe("sumMultiples", () => {
  test("returns 0 if there is no multiple of 3 or 5", () => {
    expect(sumMultiples([0])).toBe(0);
    expect(sumMultiples([1])).toBe(0);
    expect(sumMultiples([2, 8])).toBe(0);
  });
  test("returns the sum of a list of multiples of 3 and 5", () => {
    expect(sumMultiples([3])).toBe(3);
    expect(sumMultiples([3, 5])).toBe(8);
  });
  test("returns the sum of numbers which are multiples of 3 or 5", () => {
    expect(sumMultiples([1, 2, 3, 5, 8])).toBe(8);
  });
});

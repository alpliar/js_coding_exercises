const { sumMultiples } = require("../challenges/exercise006");

describe("sumMultiples", () => {
  test("returns the next number after the given number in the array", () => {
    expect(sumMultiples([1])).toBe(0);
    expect(sumMultiples([3])).toBe(3);
    expect(sumMultiples([3, 5])).toBe(8);
    expect(sumMultiples([1, 2, 3, 5, 8])).toBe(8);
  });
});

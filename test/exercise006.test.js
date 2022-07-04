const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
} = require("../challenges/exercise006");

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

describe("isValidDNA", () => {
  test("returns false for empty string", () => {
    expect(isValidDNA("")).toBe(false);
  });
  test("returns false for incorrect DNA", () => {
    expect(isValidDNA("AZERTY")).toBe(false);
  });
  test("returns true for correct DNA", () => {
    expect(isValidDNA("GATTACA")).toBe(true);
  });
  test("should not be case sensitive", () => {
    expect(isValidDNA("gattaca")).toBe(true);
  });
});

describe("getComplementaryDNA", () => {
  test("T is paired with A", () => {
    expect(getComplementaryDNA("T")).toBe("A");
    expect(getComplementaryDNA("A")).toBe("T");
  });
  test("C is paired with G", () => {
    expect(getComplementaryDNA("C")).toBe("G");
    expect(getComplementaryDNA("G")).toBe("C");
  });
  test("gives correct complementary DNA", () => {
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    expect(getComplementaryDNA("TGAC")).toBe("ACTG");
    expect(getComplementaryDNA("AATT")).toBe("TTAA");
    expect(getComplementaryDNA("GGTG")).toBe("CCAC");
  });
});

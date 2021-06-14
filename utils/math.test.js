const mathOperations = require("./math");

describe("Calculator tests", () => {
  test("adding 1 + 2 should return 3", () => {
    expect(mathOperations.sum(1, 2)).toBe(3);
  });
});

describe("Calculator tests", () => {
  test("adding 1 + 2 should return 3", () => {
    // arrange and act
    var result = mathOperations.sum(1, 2);
    // assert
    expect(result).toBe(3);
  });
});

describe("Calculator tests", () => {
  test("adding 8 + 2 should return 10", () => {
    // arrange and act
    var result = mathOperations.sum(8, 2);

    // assert
    expect(result).toBe(10);
  });
});

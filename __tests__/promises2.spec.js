const { getSum20, getOperation100, getSum25 } = require("../exercises/promises/promises2");

describe("Exercise 2", () => {
  it("Should return 20 as result", () => {
    expect.assertions(1);
    return expect(getSum20()).resolves.toEqual(20);
  });

  it("Should return 100 as result", () => {
    expect.assertions(1);
    return expect(getOperation100()).resolves.toEqual(100);
  });

  it("Should return 25 as result", () => {
    expect.assertions(1);
    return expect(getSum25()).resolves.toEqual(25);
  });
});

const { getCompleteMessage } = require("../exercises/promises/promises1");

describe("Exercise 1", () => {
  it("should show The code to stop the bomb is KUniversity2020", () => {
    expect.assertions(1);
    return expect(getCompleteMessage()).resolves.toEqual(
      "The code to stop the bomb is KUniversity2020",
    );
  });

  it("Should fail, because message is incomplete", () => {
    expect.assertions(1);
    return expect(getCompleteMessage()).resolves.not.toBe("KUniversity2020");
  });
});

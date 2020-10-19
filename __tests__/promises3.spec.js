const { newOrderFoodProcess } = require("../exercises/promises/promises3");

describe("Exercise 3", () => {
  it("Should return Finally!! My order is: cheeseBuger,soda", () => {
    expect.assertions(1);
    const foods = ["cheeseBuger", "soda"];
    return expect(newOrderFoodProcess(foods)).resolves.toEqual(
      "Finally!! My order is: cheeseBuger,soda",
    );
  });

  it("Should return Finally!! My order is: cheeseBuger,soda,french fries", () => {
    expect.assertions(1);
    const foods = ["cheeseBuger", "soda", "french fries"];
    return expect(newOrderFoodProcess(foods)).resolves.toEqual(
      "Finally!! My order is: cheeseBuger,soda,french fries",
    );
  });
});

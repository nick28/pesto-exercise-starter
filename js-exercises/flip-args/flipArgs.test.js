// write your own test cases
import { flipArgs } from "./flipArgs";

describe("flipArgs", () => {
  it("should return a function", () => {
    expect(typeof flipArgs()).toBe("function");
  });
  it("should return a wrapped version of the original function that calls the function with reversed Arguments", () => {
    const concatenateStrings = (...strings) => {
      return strings.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
      });
    };
    const limitedFunction = flipArgs(concatenateStrings);
    expect(limitedFunction("a", "b")).toBe("ba");
    expect(limitedFunction("a", "b", "c", "d", "e")).toBe("edcba");
  });
});

import { bouncer } from "./bouncer";

//The conversion rule:

// Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
// Other values become true.

describe("bouncer", () => {
  it("removes all 0's from an array", () => {
    expect(bouncer([1, 2, 0, 4, 0, 0, 0])).toEqual([1, 2, 4]);
    expect(bouncer([0, 0, 0, 0, 0, 0, 0])).toEqual([]);
  });

  it("removes all empty string '' from an array", () => {
    expect(bouncer(["a", "b", "", 4, "", "", ""])).toEqual(["a", "b", 4]);
    expect(bouncer(["", "", "", "", "", ""])).toEqual([]);
  });

  it("removes all null's from an array", () => {
    expect(bouncer(["a", "b", null, 4, null, "", ""])).toEqual(["a", "b", 4]);
    expect(bouncer([null, null, null, null, null, null])).toEqual([]);
  });

  it("removes all undefined from an array", () => {
    expect(bouncer(["a", "b", undefined, 4, undefined, "", ""])).toEqual([
      "a",
      "b",
      4
    ]);
    expect(
      bouncer([
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined
      ])
    ).toEqual([]);
  });

  it("removes all NaN's from an array", () => {
    expect(bouncer(["a", "b", NaN, 4, NaN, "", NaN])).toEqual(["a", "b", 4]);
    expect(bouncer([NaN, NaN, null, NaN, null, null])).toEqual([]);
  });

  it("removes all falsy values from an array", () => {
    expect(bouncer([false, null, 0, NaN, undefined, "", 9])).toEqual([9]);
    expect(bouncer([false, null, 0, NaN, undefined, ""])).toEqual([]);
  });

  it("doesn't removes true values from an array", () => {
    expect(bouncer([1, null, 0, "0", undefined, "", 9])).toEqual([1, "0", 9]);
    expect(bouncer(["a", true, 1.3, 2, "123ab"])).toEqual([
      "a",
      true,
      1.3,
      2,
      "123ab"
    ]);
  });
});

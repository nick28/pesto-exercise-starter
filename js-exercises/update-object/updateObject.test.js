import { updateObject } from "./updateObject";

describe("updateObject", () => {
  it("Returns a new copy of the array with the element at the index 1 replaced with '_'", () => {
    const oldArray = ["a", "b", "c"];
    const newArray = updateObject(1, "_", oldArray);

    expect(newArray).toEqual(["a", "_", "c"]);
    expect(oldArray).toEqual(["a", "b", "c"]);
  });

  it("Returns a new copy of the array with the element at the index -1 replaced with '_'", () => {
    const oldArray = ["a", "b", "c"];
    const newArray = updateObject(-1, "_", oldArray);

    expect(newArray).toEqual(["a", "b", "_"]);
    expect(oldArray).toEqual(["a", "b", "c"]);
  });

  it("Returns a new copy of the array with the element at the index 0 replaced with 'a'", () => {
    const oldArray = ["b", "c"];
    const newArray = updateObject(0, "a", oldArray);

    expect(newArray).toEqual(["a", "c"]);
    expect(oldArray).toEqual(["b", "c"]);
  });

  it("Returns a new copy of the array with the element at the index 1 replaced with 'a'", () => {
    const oldArray = ["b", "c"];
    const newArray = updateObject(1, "a", oldArray);

    expect(newArray).toEqual(["b", "a"]);
    expect(oldArray).toEqual(["b", "c"]);
  });

  it("Returns a new copy of the array with the element at the index 1 replaced with 'a'", () => {
    const oldArray = ["b", "c"];
    const newArray = updateObject(1, "a", oldArray);

    expect(newArray).toEqual(["b", "a"]);
    expect(oldArray).toEqual(["b", "c"]);
  });

  it("Returns a new copy of the array with the element at the index 1 replaced with null ", () => {
    const oldArray = ["b", "c"];
    const newArray = updateObject(1, null, oldArray);

    expect(newArray).toEqual(["b", null]);
    expect(oldArray).toEqual(["b", "c"]);
  });

  it("throws error for out of bounds index passed", () => {
    const oldArray = ["b", "c"];
    expect(() => {
      updateObject(3, "a", oldArray);
    }).toThrow();
    expect(() => {
      updateObject(-3, "a", oldArray);
    }).toThrow();
  });

  it("throws error for invalid index passed", () => {
    const oldArray = ["b", "c"];
    expect(() => {
      updateObject(null, "a", oldArray);
    }).toThrow();
    expect(() => {
      updateObject(NaN, "a", oldArray);
    }).toThrow();
  });
});

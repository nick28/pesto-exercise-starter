import { forEach, map, filter, reduce } from "./arrayUtils";
describe("array-utils", () => {
  describe("forEach", () => {
    it("runs the function passed for every element of the collection", () => {
      let foo = jest.fn();
      let iteratableObject = [1, 2, 3, 4];
      forEach(iteratableObject, foo);
      expect(foo).toHaveBeenCalledTimes(4);
    });
    it("not runs the function passed for empty collection", () => {
      let bar = jest.fn();
      forEach([], bar);
      expect(bar).toHaveBeenCalledTimes(0);
    });
    it("throws error on invalid parameters", () => {
      expect(() => forEach([], "")).toThrow();
      expect(() => forEach([], null)).toThrow();
      expect(() => forEach([], 23)).toThrow();
      expect(() => forEach([], undefined)).toThrow();
      expect(() => forEach(undefined)).toThrow();
    });
  });

  describe("map", () => {
    it("runs the function passed for every element of the collection and return mapped Values Array", () => {
      const foo = value => {
        return value * value;
      };
      const iteratableObject = [1, 2, 3, 4];
      const mappedValues = map(iteratableObject, foo);
      expect(mappedValues).toEqual([1, 4, 9, 16]);
    });
    it("not runs the function passed for empty collection", () => {
      const bar = jest.fn();
      const mappedValues = map([], bar);
      expect(bar).toHaveBeenCalledTimes(0);
      expect(mappedValues).toEqual([]);
    });
    it("throws error on invalid parameters", () => {
      expect(() => map([], "")).toThrow();
      expect(() => map([], null)).toThrow();
      expect(() => map([], 23)).toThrow();
      expect(() => map([], undefined)).toThrow();
      expect(() => map(undefined)).toThrow();
    });
  });

  describe("filter", () => {
    it("runs the function passed for every element of the collection and return filtered Array", () => {
      const foo = value => {
        return value % 2 === 0;
      };
      const iteratableObject = [1, 2, 3, 4];
      const filteredValues = filter(iteratableObject, foo);
      expect(filteredValues).toEqual([2, 4]);
    });
    it("not runs the function passed for empty collection", () => {
      const bar = jest.fn();
      const filteredValues = filter([], bar);
      expect(bar).toHaveBeenCalledTimes(0);
      expect(filteredValues).toEqual([]);
    });
    it("throws error on invalid parameters", () => {
      expect(() => filter([], "")).toThrow();
      expect(() => filter([], null)).toThrow();
      expect(() => filter([], 23)).toThrow();
      expect(() => filter([], undefined)).toThrow();
      expect(() => filter(undefined)).toThrow();
    });
  });

  describe("reduce", () => {
    it("runs the function passed for every element of the collection and return reduced Value", () => {
      const foo = (accumulator, value) => {
        return accumulator + value;
      };
      const iteratableObject = [1, 1, 1, 1];
      const reducedValue = reduce(iteratableObject, foo);
      expect(reducedValue).toEqual(4);
    });
    it("not runs the function passed and throws for empty collection", () => {
      const bar = jest.fn();
      expect(() => reduce([], bar)).toThrow();
      expect(() => reduce([], bar, 0)).toThrow();
      expect(bar).toHaveBeenCalledTimes(0);
    });
    it("throws error on invalid parameters", () => {
      expect(() => reduce([], "")).toThrow();
      expect(() => reduce([], null)).toThrow();
      expect(() => reduce([], 23)).toThrow();
      expect(() => reduce([], undefined)).toThrow();
      expect(() => reduce(undefined)).toThrow();
    });
  });
});

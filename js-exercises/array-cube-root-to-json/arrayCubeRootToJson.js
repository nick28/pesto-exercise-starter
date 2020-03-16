const arrayCubeRootToJson = numbers => {
  return numbers.reduce((json, number) => {
    if (!isValidNumber(number)) {
      throw TypeError(
        `Expected Number received ${number} with ${typeof number} `
      );
    }

    const cubeRoot = Math.cbrt(number);
    const key = String(number);

    json[key] = cubeRoot;

    return json;
  }, {});
};

function isValidNumber(number) {
  return !(
    number === null ||
    isNaN(Number(number)) ||
    typeof number === "boolean"
  );
}

export { arrayCubeRootToJson };

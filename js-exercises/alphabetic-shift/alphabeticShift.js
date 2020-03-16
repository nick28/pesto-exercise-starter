const alphabeticShift = alphabets => {
  const transformFn = alphabet => shiftAlphabetBy(1, alphabet);

  return map(alphabets, transformFn);
};

function map(string, transform) {
  let mappedString = "";
  for (const character of string) {
    mappedString += transform(character);
  }
  return mappedString;
}

function shiftAlphabetBy(shiftValue, alphabet) {
  const ascIIOfCharacter = alphabet.charCodeAt(0);
  const shiftedCode = ascIIOfCharacter + shiftValue;
  return String.fromCharCode(shiftedCode);
}

export { alphabeticShift };

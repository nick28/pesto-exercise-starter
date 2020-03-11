function rot13(encodeString) {
  let decodedString = "";
  for (let character of encodeString) {
    const ascIIOfCharacter = character.charCodeAt(0);
    const ascIIForA = 65;
    const ascIIForZ = 90;
    const cipherShiftValue = 13;
    const isAlphabet =
      ascIIOfCharacter >= ascIIForA && ascIIOfCharacter <= ascIIForZ;
    if (isAlphabet) {
      const shiftedCode = ascIIOfCharacter - cipherShiftValue;
      const decipheredCode =
        shiftedCode >= ascIIForA
          ? shiftedCode
          : ascIIForZ - (cipherShiftValue - (ascIIOfCharacter - ascIIForA)) + 1;
      decodedString += String.fromCharCode(decipheredCode);
    } else {
      decodedString += character;
    }
  }
  return decodedString;
}

export { rot13 };

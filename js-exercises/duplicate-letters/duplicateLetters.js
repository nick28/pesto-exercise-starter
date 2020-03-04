function buildCharacterFrequencyMap(string) {
  const characterFrequencyMap = new Map();
  for (const character of string) {
    characterFrequencyMap.set(character, (characterFrequencyMap.get(character)
      ? characterFrequencyMap.get(character) + 1
      : 1));
  }
  return characterFrequencyMap;
}

function getMaxCharacterCount(characterFrequencyMap) {
  let maxCharacterCount = 0;
  for (const individualCharacterCount of characterFrequencyMap.values()) {
    if (maxCharacterCount < individualCharacterCount) {
      maxCharacterCount = individualCharacterCount;
    }
  }
  return maxCharacterCount;
}

function duplicateLetters(...string) {
  const characterFrequencyMap = buildCharacterFrequencyMap(...string);
  const maxCharacterCount = getMaxCharacterCount(characterFrequencyMap);
  return maxCharacterCount > 1 ? maxCharacterCount : false;
}

export { duplicateLetters };

function alternatingCharacters(arrayOfStrings) {
  return arrayOfStrings.map(string => getMinimumDeletionCountFrom(string));
}

function getMinimumDeletionCountFrom(string) {
  let previousCharacter;
  let minimumDeletionCount = 0;

  for (const currentCharacter of string) {
    if (previousCharacter !== currentCharacter) {
      previousCharacter = currentCharacter;
    } else {
      minimumDeletionCount += 1;
    }
  }

  return minimumDeletionCount;
}

export { alternatingCharacters };

function longestWordInString(string) {
  const spaceRegex = /\s/;
  const words = getWordsSeparatedBySeparator(spaceRegex, string);
  return getMaxLetterCountInWords(words);
}

function getMaxLetterCountInWords(words) {
  let longestWordLetterCount = 0;
  for (let word of words) {
    if (word.length > longestWordLetterCount) {
      longestWordLetterCount = word.length;
    }
  }
  return longestWordLetterCount;
}

function getWordsSeparatedBySeparator(separatorRegex, string) {
  return string.split(separatorRegex);
}

export { longestWordInString };

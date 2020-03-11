function abbreviateString(str) {
  const SPACE_REGEX = /\s/;
  const words = str.split(SPACE_REGEX);

  const FIRST_INDEX = 0;
  const LAST_INDEX = words.length - 1;

  return words.reduce((abbreviatedString, word, currentIndex) => {
    if (currentIndex === FIRST_INDEX) {
      abbreviatedString = word;
    } else if (currentIndex === LAST_INDEX) {
      abbreviatedString += ` ${word[FIRST_INDEX].toUpperCase()}.`;
    }
    return abbreviatedString;
  });
}

export { abbreviateString };

function updateObject(atIndex, updatedValue, array) {
  const length = array.length;
  if (isNotValidIndexForGivenArrayLength(atIndex, length)) {
    throw Error(`Expected index passed to be in bounds of array where positive index representing from the start
    and negative index representing index from the end of array \n Received index ${atIndex} is out of bounds.`);
  }

  const indexToReplace = atIndex >= 0 ? atIndex : array.length + atIndex;

  return array.map((value, currentIndex) => {
    if (indexToReplace === currentIndex) {
      return updatedValue;
    }
    return value;
  });
}

function isNotValidIndexForGivenArrayLength(index, length) {
  return (
    isNaN(index) ||
    index === null ||
    typeof index !== "number" ||
    index >= length ||
    -index >= length
  );
}

export { updateObject };

function aperture(tupleSize, list) {
  const listOfTuples = [];

  for (let currentIndex = 0; currentIndex < list.length; currentIndex += 1) {
    const tuple = createTupleFromIndex(currentIndex, tupleSize, list);

    if (tuple !== null) {
      listOfTuples.push(tuple);
    } else {
      break;
    }
  }

  return listOfTuples;
}

function createTupleFromIndex(currentIndex, tupleSize, list) {
  if (canAddNewTupleWith(currentIndex, tupleSize, list)) {
    return getNewTupleStartingFrom(currentIndex, tupleSize, list);
  }
  return null;
}

function getNewTupleStartingFrom(currentIndex, tupleSize, list) {
  return getElementsInRange(
    currentIndex,
    getLastIndexOfTuple(currentIndex, tupleSize),
    list
  );
}

function getLastIndexOfTuple(currentIndex, tupleSize) {
  return currentIndex + tupleSize - 1;
}

function canAddNewTupleWith(currentIndex, tupleSize, list) {
  return getLastIndexOfTuple(currentIndex, tupleSize) < list.length;
}

function getElementsInRange(from, to, array) {
  return array.filter((_, currentIndex) => {
    return currentIndex >= from && currentIndex <= to;
  });
}

export { aperture };

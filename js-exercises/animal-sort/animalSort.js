const animalSort = animals => {
  return animals.sort((first, second) => {
    if (first.numberOfLegs != second.numberOfLegs) {
      return first.numberOfLegs - second.numberOfLegs;
    }
    return first.name.localeCompare(second.name);
  });
};

export { animalSort };

const sumEvenArgs = (...integers) => {
  const filteredEvenNumbers = integers.filter(value => {
    return value % 2 == 0;
  });

  return filteredEvenNumbers.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);
};

export { sumEvenArgs };

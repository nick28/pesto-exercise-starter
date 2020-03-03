function sumAll({ startValue, lastValue }) {
  let sum = 0;
  let lowerBound = (startValue < lastValue ? startValue : lastValue)
  const upperBound = (startValue > lastValue ? startValue : lastValue)
  while (lowerBound <= upperBound) {
    sum += lowerBound;
    lowerBound += 1;
  }
  return sum;
}

export {
  sumAll,
};

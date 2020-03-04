function sumAll([leftValue, rightValue]) {
  let sum = 0;
  let lowerBound = (leftValue < rightValue ? leftValue : rightValue);
  const upperBound = (leftValue > rightValue ? leftValue : rightValue);
  while (lowerBound <= upperBound) {
    sum += lowerBound;
    lowerBound += 1;
  }
  return sum;
}

export {
  sumAll,
};

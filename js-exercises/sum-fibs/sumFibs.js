const fibonacciNumberMap = new Map();
fibonacciNumberMap.set(0, 1);
fibonacciNumberMap.set(1, 1);

function getFibonacciNumber(position) {
  const valueInFibonacciNumberMap = fibonacciNumberMap[position];
  if (
    valueInFibonacciNumberMap !== undefined
    && valueInFibonacciNumberMap !== null
  ) {
    return valueInFibonacciNumberMap;
  }
  let positionToFind = 2;
  while (positionToFind <= position) {
    fibonacciNumberMap.set(
      positionToFind,
      fibonacciNumberMap.get(positionToFind - 1)
        + fibonacciNumberMap.get(positionToFind - 2),
    );
    positionToFind += 1;
  }

  return fibonacciNumberMap.get(position);
}

function sumFibs(number) {
  let sumOfOddFibs = 0;
  let fibonacciPositon = 0;
  let fibonacciNumber = getFibonacciNumber(fibonacciPositon);

  while (fibonacciNumber <= number) {
    if (fibonacciNumber % 2 !== 0) {
      sumOfOddFibs += fibonacciNumber;
    }
    fibonacciPositon += 1;
    fibonacciNumber = getFibonacciNumber(fibonacciPositon);
  }
  return sumOfOddFibs;
}
export { sumFibs };

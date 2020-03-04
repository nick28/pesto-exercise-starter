const isPrime = numToVerfify => {
  for (let divisor = 2, sqrtOfNum = Math.sqrt(numToVerfify); divisor <= sqrtOfNum; divisor += 1) {
    if (numToVerfify % divisor === 0) return false;
  }
  return numToVerfify > 1;
};

function sumPrimes(number) {
  let sumOfPrimeNumbers = 0;
  let wholeNumber = 2;

  while (wholeNumber <= number) {
    if (isPrime(wholeNumber)) {
      sumOfPrimeNumbers += wholeNumber;
    }
    wholeNumber += 1;
  }
  return sumOfPrimeNumbers;
}

export { sumPrimes };

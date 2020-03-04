const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) if (num % i === 0) return false;
  return num > 1;
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

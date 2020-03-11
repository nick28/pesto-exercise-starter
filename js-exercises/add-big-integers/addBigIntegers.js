function addBigIntegers(intString) {
  const integersStringForm = intString.split("\n").map(stringValue => {
    return stringValue;
  });

  return integersStringForm.reduce((accumulator, currentValue) => {
    let sum = "";
    let carryFromPreviousSums = 0;
    const FIRST_INDEX = 0;
    let accumulatorIteratorIndex = accumulator.length - 1;
    let currentValueIteratorIndex = currentValue.length - 1;

    while (
      accumulatorIteratorIndex >= FIRST_INDEX &&
      currentValueIteratorIndex >= FIRST_INDEX
    ) {
      let { digitSum, carry } = sumOfTwoDigitsInString(
        accumulator[accumulatorIteratorIndex],
        currentValue[currentValueIteratorIndex],
        carryFromPreviousSums
      );
      carryFromPreviousSums = carry;
      accumulatorIteratorIndex -= 1;
      currentValueIteratorIndex -= 1;
      sum = String(digitSum) + sum;
    }

    let result = addRemainingDigitsToPreviousSumFrom(
      accumulator,
      accumulatorIteratorIndex,
      sum,
      carryFromPreviousSums
    );
    sum = result.newSum;
    carryFromPreviousSums = result.carry;

    result = addRemainingDigitsToPreviousSumFrom(
      currentValue,
      currentValueIteratorIndex,
      sum,
      carryFromPreviousSums
    );
    sum = result.newSum;
    carryFromPreviousSums = result.carry;

    if (carryFromPreviousSums > 0) {
      sum = String(carryFromPreviousSums) + sum;
    }
    return sum;
  });
}

function addRemainingDigitsToPreviousSumFrom(
  integerStringForm,
  iteratorCurrentIndex,
  previousSum,
  carry
) {
  let sum = previousSum;
  let remainingDigitsIteratorIndex = iteratorCurrentIndex;
  let carryFromPreviousSums = carry;

  while (remainingDigitsIteratorIndex >= 0) {
    if (carryFromPreviousSums > 0) {
      const { digitSum, carry } = sumOfTwoDigitsInString(
        integerStringForm[remainingDigitsIteratorIndex],
        0,
        carryFromPreviousSums
      );
      carryFromPreviousSums = carry;
      sum = String(digitSum) + sum;
    } else {
      sum = integerStringForm[remainingDigitsIteratorIndex] + sum;
    }
    remainingDigitsIteratorIndex -= 1;
  }

  return { newSum: sum, carry: carryFromPreviousSums };
}

function sumOfTwoDigitsInString(digit1, digit2, carry) {
  const digitSum = Number(digit1) + Number(digit2) + carry;
  const newCarry = digitSum >= 10 ? 1 : 0;
  return { digitSum: digitSum % 10, carry: newCarry };
}

export { addBigIntegers };

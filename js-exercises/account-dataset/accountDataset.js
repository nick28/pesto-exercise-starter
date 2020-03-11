const path = require("path");
const fs = require("fs");

const fileContent = fs.readFileSync(
  path.join(__dirname, "dataset.json"),
  "utf-8"
);

const { bankBalances } = JSON.parse(fileContent);
const HUNDREDTH_PLACE = 2;

function hundredThousandairs() {
  const HUNDRED_THOUSAND = 100000;
  return bankBalances.filter(account => account.amount > HUNDRED_THOUSAND);
}

function datasetWithRoundedDollar() {
  return bankBalances.map(account => {
    account.rounded = Math.round(account.amount);
    return account;
  });
}

function sumOfBankBalances() {
  return Number(
    bankBalances
      .reduce((accumulator, account) => {
        return accumulator + Number(account.amount);
      }, 0)
      .toFixed(HUNDREDTH_PLACE)
  );
}

function sumOfInterests() {
  const statesToSelect = ["WI", "IL", "WY", "OH", "GA", "DE"];
  const INTEREST_RATE = 18.9 * 0.01;
  const sum = bankBalances
    .filter(account => {
      return statesToSelect.includes(account.state);
    })
    .reduce((sumOfInterests, account) => {
      const amount = Number(account.amount);
      const interestAddedAmount = Number(
        (amount * INTEREST_RATE).toFixed(HUNDREDTH_PLACE)
      );
      return sumOfInterests + interestAddedAmount;
    }, 0);

  return Number(sum.toFixed(HUNDREDTH_PLACE));
}

function higherStateSums() {
  const statesAmountDictionary = bankBalances.reduce(
    (statesAmountDictionary, account) => {
      const amount = Number(account.amount);
      const statesAmount = statesAmountDictionary.get(account.state);
      return statesAmount
        ? statesAmountDictionary.set(account.state, statesAmount + amount)
        : statesAmountDictionary.set(account.state, amount);
    },
    new Map()
  );

  let higherStateSums = 0;
  const THOUSAND_K = 1000000;
  statesAmountDictionary.forEach(value => {
    higherStateSums += value > THOUSAND_K ? value : 0;
  });
  return higherStateSums;
}

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums
};

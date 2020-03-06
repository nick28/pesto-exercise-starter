function flipArgs(callback) {
  return function wrappedFunction(...args) {
    return callback(...getReversedArguments(...args));
  };
}

function getReversedArguments(...args) {
  let reverseIteratorIndex = args.length - 1;
  let reversedArguments = new Array();
  for (; reverseIteratorIndex >= 0; reverseIteratorIndex -= 1) {
    reversedArguments.push(args[reverseIteratorIndex]);
  }
  return reversedArguments;
}

export { flipArgs };

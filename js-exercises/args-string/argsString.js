const argsString = (message, args) => {
  return args.reduce((interpolatedString, argument) => {
    interpolatedString = interpolatedString.replace(/{}/, argument);
    return interpolatedString;
  }, message);
};

export { argsString };

const rotatedString = (string1, string2) => {
  if (string1 === string2 || string1.length !== string2.length) {
    return false;
  }
  const concatenatedFormOfString1WithIteself = string1 + string1;
  return concatenatedFormOfString1WithIteself.includes(string2);
};

export { rotatedString };

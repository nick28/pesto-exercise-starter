function balancedBraces(string) {
  let stack = new Array();
  const startingBraceBracketParenthese = ["{", "[", "("];
  const endingBraceBracketParenthese = ["}", "]", ")"];
  for (let character of string) {
    if (startingBraceBracketParenthese.includes(character)) {
      stack.push(character);
    } else if (endingBraceBracketParenthese.includes(character)) {
      const startingCharacter = stack.pop();
      if (!isBalancedScopeDefinedBy(startingCharacter, character)) {
        return false;
      }
    }
  }
  const isStackEmpty = !(stack.length > 0);
  return isStackEmpty;
}

function isBalancedScopeDefinedBy(startingCharacter, endingCharacter) {
  return (
    (startingCharacter === "{" && endingCharacter === "}") ||
    (startingCharacter === "[" && endingCharacter === "]") ||
    (startingCharacter === "(" && endingCharacter === ")")
  );
}

export { balancedBraces };

const limitFunctionCallCount = (func, allowedCallCount) => {
  let callCount = 0;
  return (...args) => {
    callCount += 1;
    if (callCount > allowedCallCount) {
      return null;
    }
    return func(...args);
  };
};
export { limitFunctionCallCount };

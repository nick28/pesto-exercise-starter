const limitFunctionCallCount = (callback, allowedInvocationCount) => {
  let callbackInvocationCount = 0;
  return (...args) => {
    callbackInvocationCount += 1;
    if (callbackInvocationCount > allowedInvocationCount) {
      return null;
    }
    return callback(...args);
  };
};
export { limitFunctionCallCount };

function lastIndexOf(element, array) {
  return array.reduce((lastIndexOfElement, currentValue, currentIndex) => {
    if (element === currentValue) {
      lastIndexOfElement = currentIndex;
    }
    return lastIndexOfElement;
  }, -1);
}

export { lastIndexOf };

function dropElements(elements, predicate) {
  return elements.filter(element => {
    return predicate(element);
  });
}

export { dropElements };

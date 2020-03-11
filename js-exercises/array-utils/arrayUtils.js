function forEach(collection, callback) {
  const iterable = Object(collection);
  const length = iterable.length;

  if (typeof callback !== "function") {
    throw TypeError(
      `Expected second Argument: Function \n Received: ${typeOf(callback)}`
    );
  }

  let iteratorIndex = 0;
  while (iteratorIndex < length) {
    const property = String(iteratorIndex);
    if (property in iterable) {
      const value = iterable[property];
      callback(value, iteratorIndex, iterable);
    }
    iteratorIndex += 1;
  }
}

function map(collection, callback) {
  const iterable = Object(collection);
  const length = iterable.length;

  if (typeof callback !== "function") {
    throw TypeError(
      `Expected second Argument: Function \n Received: ${typeOf(callback)}`
    );
  }

  let iteratorIndex = 0;
  let mappedCollection = new Array();
  while (iteratorIndex < length) {
    const property = String(iteratorIndex);
    if (property in iterable) {
      const value = iterable[property];
      mappedCollection[property] = callback(value, iteratorIndex, iterable);
    }
    iteratorIndex += 1;
  }
  return mappedCollection;
}

function filter(collection, callback) {
  const iterable = Object(collection);
  const length = iterable.length;

  if (typeof callback !== "function") {
    throw TypeError(
      `Expected second Argument: Function \n Received: ${typeOf(callback)}`
    );
  }

  let iteratorIndex = 0;
  let filteredArrayIteratorIndex = 0;
  let filteredCollection = new Array();
  while (iteratorIndex < length) {
    const property = String(iteratorIndex);
    if (property in iterable) {
      const value = iterable[property];
      const isSelected = Boolean(callback(value, iteratorIndex, iterable));
      if (isSelected) {
        filteredCollection[filteredArrayIteratorIndex] = value;
        filteredArrayIteratorIndex += 1;
      }
    }
    iteratorIndex += 1;
  }
  return filteredCollection;
}

function reduce(collection, callback, initalValue) {
  const iterable = Object(collection);
  const length = iterable.length;

  if (typeof callback !== "function") {
    throw TypeError(
      `Expected second Argument: Function \n Received: ${typeOf(callback)}`
    );
  }

  if (length == 0 && initalValue == undefined) {
    throw TypeError(
      `Expected: first Argument Array should not be empty or inital value should be supplied in last argument  
      Received: Array of length ${length} and Inital value ${initalValue}`
    );
  }

  let iteratorIndex = 0;
  let accumulator;
  if (initalValue) {
    accumulator = initalValue;
  } else {
    let propertyPresent = false;
    while (propertyPresent == false && iteratorIndex < length) {
      const property = String(iteratorIndex);
      propertyPresent = property in iterable;
      if (propertyPresent) {
        accumulator = iterable[property];
      }
      iteratorIndex += 1;
    }

    if (!propertyPresent) {
      throw TypeError(
        `Expected: first Argument Array should not be empty  
        Received: Array of length ${length} and Inital value ${initalValue}`
      );
    }
  }
  while (iteratorIndex < length) {
    const property = String(iteratorIndex);
    if (property in iterable) {
      const value = iterable[property];
      accumulator = callback(accumulator, value, iteratorIndex, iterable);
    }
    iteratorIndex += 1;
  }
  return accumulator;
}

export { forEach, map, filter, reduce };

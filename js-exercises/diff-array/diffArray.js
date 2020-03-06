function diffArray(array1, array2) {
  //Add Unique Values from Array1
  const diffInArray1 = array1.filter(value => {
    return !array2.includes(value);
  });

  //Add Unique Values from Array2
  const diffInArray2 = array2.filter(value => {
    return !array1.includes(value);
  });
  return [...diffInArray1, ...diffInArray2];
}

export { diffArray };

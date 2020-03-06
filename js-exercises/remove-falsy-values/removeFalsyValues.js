function removeFalsyValues(array) {
  const arrayWithoutFalsyValues = array.filter(item => {
    return Boolean(item);
  });
  return arrayWithoutFalsyValues;
}

export { removeFalsyValues };

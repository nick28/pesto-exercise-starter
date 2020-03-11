function chunkArrayInGroups(array, chunkSize) {
  return array.reduce((groupedArray, item, currentIndex) => {
    if (currentIndex % chunkSize == 0) {
      groupedArray.push([item]);
    } else {
      let lastChunk = groupedArray.pop();
      lastChunk.push(item);
      groupedArray.push(lastChunk);
    }
    return groupedArray;
  }, []);
}

export { chunkArrayInGroups };

function updateInventory(currentInventory, newInventory) {
  const ITEM_NAME = 1;
  const ITEM_COUNT = 0;
  const FIRST_ITEM = 0;

  const updatedCurrentInventory = currentInventory.reduce(
    (updatedInventory, currentInventoryItem) => {
      const filteredValue = newInventory.filter(newInventoryItem => {
        return newInventoryItem[ITEM_NAME] === currentInventoryItem[ITEM_NAME];
      });

      if (filteredValue.length > 0) {
        updatedInventory.push([
          currentInventoryItem[ITEM_COUNT] +
            filteredValue[FIRST_ITEM][ITEM_COUNT],
          currentInventoryItem[ITEM_NAME]
        ]);
        newInventory = getUpdatedNewInventoryAfterRemoving(
          currentInventoryItem
        );
      } else {
        updatedInventory.push([
          currentInventoryItem[ITEM_COUNT],
          currentInventoryItem[ITEM_NAME]
        ]);
      }

      return updatedInventory;
    },
    []
  );

  function getUpdatedNewInventoryAfterRemoving(value) {
    return newInventory.filter(currentData => {
      return currentData[ITEM_NAME] !== value[ITEM_NAME];
    });
  }

  const sortedMergedInventory = updatedCurrentInventory
    .concat(newInventory)
    .sort((firstInventoryItem, secondInventoryItem) => {
      return firstInventoryItem[ITEM_NAME].toUpperCase().localeCompare(
        secondInventoryItem[ITEM_NAME].toUpperCase()
      );
    });

  return sortedMergedInventory;
}

export { updateInventory };

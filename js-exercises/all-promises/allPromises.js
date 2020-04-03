const allPromises = promises => {
  if (promises !== null && promises instanceof Array) {
    const onlyPromises = promises.map(value => Promise.resolve(value));
    return new Promise((resolve, reject) => {
      const totalLength = promises.length;
      let count = 0;
      const result = Array(totalLength);
      for (const [position, promise] of Object.entries(onlyPromises)) {
        promise.then(
          value => {
            result[position] = value;
            count += 1;
            if (count === totalLength) {
              resolve(result);
            }
          },
          error => {
            reject(error);
          }
        );
      }
    });
  }
  return Promise.resolve(promises);
};

export { allPromises };

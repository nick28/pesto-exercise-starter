function isTriangle(sideLength1, sideLength2, sideLength3) {
// Verify Triangle InEquality Theorem - Sum of Any two sides length 
// should be greater than the remaining one
  const largerSideLength = Math.max(sideLength1, sideLength2, sideLength3);

  // In short Sum of two smaller sides should be greater than the larger side
  return (sideLength1 + sideLength2 + sideLength3 - largerSideLength) > largerSideLength;
}

export {
  isTriangle,
};

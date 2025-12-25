// Space Week Day 4: Landing Spot
// In day four of Space Week, you are given a matrix of numbers (an array of arrays), representing potential landing spots for your rover. Find the safest landing spot based on the following rules:

// Each spot in the matrix will contain a number from 0-9, inclusive.
// Any 0 represents a potential landing spot.
// Any number other than 0 is too dangerous to land. The higher the number, the more dangerous.
// The safest spot is defined as the 0 cell whose surrounding cells (up to 4 neighbors, ignore diagonals) have the lowest total danger.
// Ignore out-of-bounds neighbors (corners and edges just have fewer neighbors).
// Return the indices of the safest landing spot. There will always only be one safest spot.
// For instance, given:

// [
//   [1, 0],
//   [2, 0]
// ]
// Return [0, 1], the indices for the 0 in the first array.

function findLandingSpot(matrix) {
  console.log(matrix);

  const avArr = [];

  // find the zero
  for (const x of matrix) {
    // console.log(x.length)
    for (const y of x) {
      console.log(y);
    }
  }

  // with the lowest risk neighbours

  // take the average of the array
  return matrix;
}

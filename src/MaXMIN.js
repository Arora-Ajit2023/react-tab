//Input: [2, 8, 3, 10, 5];

// const MaxDiff = (input) => {
//   let max = input[0],
//     min = input[0];

//   for (let i = 1; i < input.length - 1; i++) {
//     if (max < input[i + 1]) {
//       max = input[i + 1];
//     }
//     if (min > input[i + 1]) {
//       min = input[i];
//     }
//   }

//   return max - min;
// };
// console.log(MaxDiff([2, 8, 3, 10, 5]));

// function transposeMatrix(matrix) {
//   const rows = matrix.length;
//   const cols = matrix.length;

//   // Create a new matrix with swapped rows and columns
//   const transposedMatrix = [];
//   for (let i = 0; i < cols; i++) {
//     transposedMatrix[i] = [];
//     for (let j = 0; j < rows; j++) {
//       transposedMatrix[i][j] = matrix[j][i];
//     }
//   }

//   return transposedMatrix;
// }

// // Example usage
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// const transposed = transposeMatrix(matrix);
// console.log(transposed);

const transposed = (arr) => {
  const row = matrix.length;
  const col = matrix.length;

  const transpoesdmatrix = [];
  for (let i = 0; i < col; i++) {
    transpoesdmatrix[i] = [];
    for (let j = 0; j < row; j++) {
      transpoesdmatrix[i][j] = matrix[j][i];
    }
  }
  return transpoesdmatrix;
};
console.log(transposed(matrix));

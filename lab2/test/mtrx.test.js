const chai = require('chai');
const assert = chai.assert;
const { addMatrix, multiplyMatrix } = require('../matrix');

describe('Matrix Library', () => {
  it('should add two matrices correctly', () => {
    const matrixA = [[1, 2], [3, 4]];
    const matrixB = [[5, 6], [7, 8]];
    const result = addMatrix(matrixA, matrixB);
    assert.deepEqual(result, [[6, 8], [10, 12]]);
  });

  it('should multiply two matrices correctly', () => {
    const matrixA = [[1, 2], [3, 4]];
    const matrixB = [[5, 6], [7, 8]];
    const result = multiplyMatrix(matrixA, matrixB);
    assert.deepEqual(result, [[19, 22], [43, 50]]);
  });
});

const chai = require('chai');
const { expect } = chai;
const Matrix = require('../matrix'); 

describe('Matrix', function () {
  // Mock a matrix for testing
  const testMatrix = new Matrix(3); // Replace '3' with the desired size of the matrix

  it('should initialize a matrix with the correct size', function () {
    //перевіряємо, що методи get_rows та get_cols повертають очікувані значення (3 та 4 у даному випадку).
    expect(testMatrix.get_rows()).to.equal(3);
    expect(testMatrix.get_cols()).to.equal(4); // Since n+1 in your class constructor
  });

  it('should set and get values correctly', function () {
    testMatrix.set(0, 0, 5);
    expect(testMatrix.get(0, 0)).to.equal(5);
  });

  it('should perform row swapping correctly', function () {
    // Mock a matrix with a row that can be swapped
    const swapMatrix = new Matrix(3);
    swapMatrix.set(0, 0, 0);
    swapMatrix.set(1, 0, 2);

    swapMatrix.swap_with_nonzero_row(0);

    // After swapping, the first and second rows should be swapped
    expect(swapMatrix.get(0, 0)).to.equal(2);
  });

  it('should check for the existence of a wrong row correctly', function () {
    // Mock a matrix with a wrong row
    const wrongRowMatrix = new Matrix(3);
    wrongRowMatrix.set(0, 0, 0);
    wrongRowMatrix.set(0, 3, 2); // Non-zero value in the first row

    expect(wrongRowMatrix.exists_wrong_row()).to.be.true;
  });

  it('should check for the existence of a zero row correctly', function () {
    // Mock a matrix with a zero row
    const zeroRowMatrix = new Matrix(3);
    zeroRowMatrix.set(0, 0, 0);

    expect(zeroRowMatrix.exists_zero_row()).to.be.true;
  });
});

const Mtrx = require('../node_modules/mtrx'); 

function addMatrix(matrixA, matrixB) {
    // Реалізація додавання матриць
    return Mtrx.add(new Mtrx(matrixA), new Mtrx(matrixB))
  }
  
  function multiplyMatrix(matrixA, matrixB) {
    // Реалізація множення матриць
    return Mtrx.mul(new Mtrx(matrixA), new Mtrx(matrixB))
  }
  
  module.exports = {
    addMatrix,
    multiplyMatrix,
  };

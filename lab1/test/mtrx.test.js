const chai = require('chai');
const assert = chai.assert;
const Mtrx = require('../../node_modules/mtrx'); 
const multiply = require('../../node_modules/mtrx/src/multiply');
const transpose = require('../../node_modules/mtrx//src/transpose');


describe('Mtrx', () => {
    it('return a new matrix a*a', () => {
        let a = [[8, 3, 1], [2, 1, 9], [2, 3, 0]];
        const result = multiply(a, a);
        assert.deepStrictEqual(result, [[72, 30, 35], [36, 34, 11], [22, 9, 29]]); //порівняння отриманого результату з очікуваним результатом
      });
    
      it('return a new matrix a*b', () => {
        let a = [[8, 3, 1], [2, 1, 9], [2, 3, 0]];
        let b = [[1], [2], [3]];
        const result = multiply(a, b);
        assert.deepStrictEqual(result, [[17], [31], [8]]);
      });

     
    it('return a new matrix that is param-matrix\'transpose', function() {
        let a = [[1, 2, 3], [4, 5, 6]]
        assert.deepStrictEqual(transpose(a), [[1, 4], [2, 5], [3, 6]])
        assert.deepStrictEqual(a, [[1, 2, 3], [4, 5, 6]])
    })
     
});




const assert = require('assert');
console.clear();

let multiply = 1;
function fac(list) {
  return list.map(skaicius => skaicius * multiply);
}
function f_a_c_t_o_r_y(skaiciu_grandinele = [], double = 1) {
  multiply = double;
  // DO NOT EDIT THIS LINE
  return fac(skaiciu_grandinele);
}

const factory = f_a_c_t_o_r_y;

// ***********************************
// DO NOT EDIT CODE BELOW THIS COMMENT
// ***********************************

assert.deepStrictEqual(factory([1]), [1]);
assert.deepStrictEqual(factory([1], 2), [2]);
assert.deepStrictEqual(factory([2], 2), [4]);
assert.deepStrictEqual(factory([2], 3), [6]);
assert.deepStrictEqual(factory([1, 2, 3], 1), [1, 2, 3]);
assert.deepStrictEqual(factory([1, 2, 3], 2), [2, 4, 6]);
assert.deepStrictEqual(factory([1, 2, 3], 0), [0, 0, 0]);
assert.deepStrictEqual(factory([1, 2, 3], 10), [10, 20, 30]);
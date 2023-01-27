/**
 * 
 * @param {*} horizontal wall length 
 * @param {*} vertical wall length 
 * @returns {[boolean, number|string]} rectuangular area
 */
function rectangularShapeArea(width, length) {
  const checkValue = value => {
    if (value === null ||
      value === undefined ||
      typeof value === 'object' ||
      typeof value === 'string' ||
      typeof value === 'function' ||
      typeof value !== 'number') {
      throw new Error(`Reikšmė negali būti ${value === null ? "null" : value === undefined ? "undefined" : typeof value}`);
    }
    if (value <= 0) {
      throw new Error('Reikšmė turi būti didesnė už 0');
    }
  }
  try {
    checkValue(width);
    checkValue(length);
  } catch (error) {
    return [true, error.message];
  }
  const size = width * length;
  return [false, size];
}

console.log(rectangularShapeArea(-10, 10), '-->', [true, 'Reikšmė turi būti didesnė už 0']);
console.log(rectangularShapeArea(10, -10), '-->', [true, 'Reikšmė turi būti didesnė už 0']);
console.log(rectangularShapeArea(10, null), '-->', [true, 'Reikšmė negali būti null']);
console.log(rectangularShapeArea(10, rectangularShapeArea()), '-->', [true, 'Reikšmė negali būti object']);
console.log(rectangularShapeArea(10, 10), '-->', [false, 100]);
console.log(rectangularShapeArea(5, 4), '-->', [false, 20]);
console.log(rectangularShapeArea(2, 8), '-->', [false, 16]);


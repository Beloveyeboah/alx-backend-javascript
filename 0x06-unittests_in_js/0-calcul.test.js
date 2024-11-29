const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should round both numbers and return their sum', function() {
    assert.strictEqual(calculateNumber(1.4, 4.5), 6); // 1 + 5
    assert.strictEqual(calculateNumber(1.5, 3.7), 6); // 2 + 4
    assert.strictEqual(calculateNumber(2.5, 2.5), 6); // 3 + 3
  });

  it('should round the first number correctly', function() {
    assert.strictEqual(calculateNumber(1.4, 4), 5); // 1 + 4
    assert.strictEqual(calculateNumber(1.6, 4), 6); // 2 + 4
  });

  it('should round the second number correctly', function() {
    assert.strictEqual(calculateNumber(1, 4.4), 5); // 1 + 4
    assert.strictEqual(calculateNumber(1, 4.6), 6); // 1 + 5
  });
});

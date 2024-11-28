const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return 4 when inputs are 1 and 3', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 4 when inputs are 1.4 and 3.4', function() {
    assert.strictEqual(calculateNumber(1.4, 3.4), 4);
  });

  it('should return 5 when inputs are 1.5 and 3.5', function() {
    assert.strictEqual(calculateNumber(1.5, 3.5), 5);
  });

  it('should return -4 when inputs are -1.6 and -2.4', function() {
    assert.strictEqual(calculateNumber(-1.6, -2.4), -4);
  });

  it('should return 0 when inputs are -0.5 and 0.5', function() {
    assert.strictEqual(calculateNumber(-0.5, 0.5), 0);
  });
});

const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

// Test SUM
describe("calculateNumber with SUM type", function() {
  it('should return the sum of rounded a = 1 and b = 3', function() {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });
  it('should return the sum of rounded a = 1 and b = 3.7', function() {
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
  });
  it('should return the sum of rounded a = 1.2 and b = 3.7', function() {
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
  });
  it('should return the sum of rounded a = -1.4 and b = -3.7', function() {
    expect(calculateNumber('SUM', -1.4, -3.6)).to.equal(-5);
  });
  it('should return the sum of rounded a = 1.5 and b = -2.5', function() {
    expect(calculateNumber('SUM', 1.5, -2.5)).to.equal(0);
  });
  it('should return the sum of rounded a = -2.5 and b = -2.5', function() {
    expect(calculateNumber('SUM', -2.5, -2.5)).to.equal(-4);
  });
  it('should handle very large numbers', function() {
    expect(calculateNumber('SUM', 1e15, 1e15)).to.equal(2e15);
    expect(calculateNumber('SUM', -1e15, -1e15)).to.equal(-2e15);
  });
  it('should handle very small numbers', function() {
    expect(calculateNumber('SUM', 1e-6, 1e-6)).to.equal(0);  // Both numbers are too small to round up
    expect(calculateNumber('SUM', 1e-6, 1)).to.equal(1);    // One number rounds to 1, the other to 0
  });
  it('should handle special values', function() {
    expect(calculateNumber('SUM', NaN, 1)).to.be.NaN;
    expect(calculateNumber('SUM', Infinity, 1)).to.equal(Infinity);
    expect(calculateNumber('SUM', -Infinity, -1)).to.equal(-Infinity);
  });
  it('should handle zero correctly', function() {
    expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    expect(calculateNumber('SUM', 0, 1.5)).to.equal(2);
    expect(calculateNumber('SUM', 1.5, 0)).to.equal(2);
    expect(calculateNumber('SUM', 0, -1.5)).to.equal(-1);
  });
})

// Test SUBTRACT
describe("calculateNumber with SUBTRACT type", function() {
  it('should return the difference of rounded a = 1 and b = 3', function() {
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(0);
  });
  it('should return the difference of rounded a = 1 and b = 3.7', function() {
    expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(0);
  });
  it('should return the difference of rounded a = 1.2 and b = 3.7', function() {
    expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(0);
  });
  it('should return the difference of rounded a = -1.4 and b = -3.7', function() {
    expect(calculateNumber('SUBTRACT', -1.4, -3.6)).to.equal(0);
  });
  it('should return the difference of rounded a = 1.5 and b = -2.5', function() {
    expect(calculateNumber('SUBTRACT', 1.5, -2.5)).to.equal(0);
  });
  it('should return the difference of rounded a = -2.5 and b = -2.5', function() {
    expect(calculateNumber('SUBTRACT', -2.5, -2.5)).to.equal(0);
  });
  it('should handle very large numbers', function() {
    expect(calculateNumber('SUBTRACT', 1e15, 1e15)).to.equal(0);
    expect(calculateNumber('SUBTRACT', -1e15, -1e15)).to.equal(0);
  });
  it('should handle very small numbers', function() {
    expect(calculateNumber('SUBTRACT', 1e-6, 1e-6)).to.equal(0);  // Both numbers are too small to round up
    expect(calculateNumber('SUBTRACT', 1e-6, 1)).to.equal(0);    // One number rounds to 1, the other to 0
  });
  it('should handle special values', function() {
    // expect(calculateNumber('SUBTRACT', NaN, 1)).to.be.NaN;
    expect(calculateNumber('SUBTRACT', Infinity, 1)).to.equal(0);
    expect(calculateNumber('SUBTRACT', -Infinity, -1)).to.equal(0);
  });
  it('should handle zero correctly', function() {
    expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    expect(calculateNumber('SUBTRACT', 0, 1.5)).to.equal(0);
    expect(calculateNumber('SUBTRACT', 1.5, 0)).to.equal(0);
    expect(calculateNumber('SUBTRACT', 0, -1.5)).to.equal(0);
  });
})

// Test DIVIDE
describe("calculateNumber with DIVIDE type", function() {
  it('should return the division of a = 1 and b = 3', function() {
    expect(calculateNumber('DIVIDE', 1, 3)).to.equal(0.3333333333333333);
  });
  it('should return the division of a = 1 and b = 3.7', function() {
    expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
  });
  it('should return the division of a = 1.2 and b = 3.7', function() {
    expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.5);
  });
  it('should return the division of a = -1.4 and b = -3.7', function() {
    expect(calculateNumber('DIVIDE', -1.4, -3.6)).to.equal(0.25);
  });
  it('should return the division of a = 1.5 and b = -2.5', function() {
    expect(calculateNumber('DIVIDE', 1.5, -2.5)).to.equal(-1);
  });
  it('should return the division of a = -2.5 and b = -2.5', function() {
    expect(calculateNumber('DIVIDE', -2.5, -2.5)).to.equal(1);
  });
  it('should handle very large numbers', function() {
    expect(calculateNumber('DIVIDE', 1e15, 1)).to.equal(1e15);
    expect(calculateNumber('DIVIDE', 1, 1e15)).to.equal(1e-15);
  });
  it('should handle very small numbers', function() {
    expect(calculateNumber('DIVIDE', 1e-6, 1e-6)).to.equal('Error');  // Both numbers are too small to round up
    expect(calculateNumber('DIVIDE', 1e-6, 1)).to.equal(0);    // One number rounds to 1, the other to 0
  });
  it('should handle special values', function() {
    expect(calculateNumber('DIVIDE', NaN, 1)).to.be.NaN;
    expect(calculateNumber('DIVIDE', Infinity, 1)).to.equal(Infinity);
    expect(calculateNumber('DIVIDE', -Infinity, -1)).to.equal(Infinity);
  });
  it('should handle zero correctly', function() {
    expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 0, 1.5)).to.equal(0);
    expect(calculateNumber('DIVIDE', 1.5, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 0, -1.5)).to.equal(0);
  });
})

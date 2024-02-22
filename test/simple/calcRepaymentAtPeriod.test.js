import calcRepaymentAtPeriod from '../../src/simple/calcRepaymentAtPeriod';
describe('calcRepaymentAtPeriod', () => {
  test('returns true', () => {
    const result = calcRepaymentAtPeriod();
    expect(result).toBe(true);
  });
});

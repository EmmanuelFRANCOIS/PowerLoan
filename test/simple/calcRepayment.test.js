import calcRepayment from '../../src/simple/calcRepayment';
describe('calcRepayment', () => {
  test('returns true', () => {
    const result = calcRepayment();
    expect(result).toBe(true);
  });
});

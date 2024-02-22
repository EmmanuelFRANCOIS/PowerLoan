import calcTotalRepayments from '../../src/simple/calcTotalRepayments';
describe('calcTotalRepayments', () => {
  test('returns true', () => {
    const result = calcTotalRepayments();
    expect(result).toBe(true);
  });
});

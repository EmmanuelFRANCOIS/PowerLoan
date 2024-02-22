import calcRemainingRepaymentsAmountAtPeriod from '../../src/simple/calcRemainingRepaymentsAmountAtPeriod';
describe('calcRemainingRepaymentsAmountAtPeriod', () => {
  test('returns true', () => {
    const result = calcRemainingRepaymentsAmountAtPeriod();
    expect(result).toBe(true);
  });
});

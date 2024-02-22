import calcRemainingRepaymentsNumberAtPeriod from '../../src/simple/calcRemainingRepaymentsNumberAtPeriod';
describe('calcRemainingRepaymentsNumberAtPeriod', () => {
  test('returns true', () => {
    const result = calcRemainingRepaymentsNumberAtPeriod();
    expect(result).toBe(true);
  });
});

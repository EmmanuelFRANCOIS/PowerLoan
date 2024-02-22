import calcInterestRateByPeriod from '../../src/common/calcInterestRateByPeriod';
describe('calcInterestRateByPeriod', () => {
  test('returns true', () => {
    const result = calcInterestRateByPeriod();
    expect(result).toBe(true);
  });
});

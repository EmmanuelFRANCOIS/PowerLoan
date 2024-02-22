import calcInterestRateCompoundInterest from '../../src/common/calcInterestRateCompoundInterest';
describe('calcInterestRateCompoundInterest', () => {
  test('returns true', () => {
    const result = calcInterestRateCompoundInterest();
    expect(result).toBe(true);
  });
});

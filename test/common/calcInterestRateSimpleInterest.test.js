import calcInterestRateSimpleInterest from '../../src/common/calcInterestRateSimpleInterest';
describe('calcInterestRateSimpleInterest', () => {
  test('returns true', () => {
    const result = calcInterestRateSimpleInterest();
    expect(result).toBe(true);
  });
});

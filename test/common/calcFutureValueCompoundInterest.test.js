import calcFutureValueCompoundInterest from '../../src/common/calcFutureValueCompoundInterest';
describe('calcFutureValueCompoundInterest', () => {
  test('returns true', () => {
    const result = calcFutureValueCompoundInterest();
    expect(result).toBe(true);
  });
});

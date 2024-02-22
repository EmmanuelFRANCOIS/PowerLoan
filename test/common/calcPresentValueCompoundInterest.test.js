import calcPresentValueCompoundInterest from '../../src/common/calcPresentValueCompoundInterest';
describe('calcPresentValueCompoundInterest', () => {
  test('returns true', () => {
    const result = calcPresentValueCompoundInterest();
    expect(result).toBe(true);
  });
});

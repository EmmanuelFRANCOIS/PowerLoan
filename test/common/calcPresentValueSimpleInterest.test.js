import calcPresentValueSimpleInterest from '../../src/common/calcPresentValueSimpleInterest';
describe('calcPresentValueSimpleInterest', () => {
  test('returns true', () => {
    const result = calcPresentValueSimpleInterest();
    expect(result).toBe(true);
  });
});

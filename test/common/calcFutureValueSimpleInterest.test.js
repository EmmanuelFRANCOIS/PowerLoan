import calcFutureValueSimpleInterest from '../../src/common/calcFutureValueSimpleInterest';
describe('calcFutureValueSimpleInterest', () => {
  test('returns true', () => {
    const result = calcFutureValueSimpleInterest();
    expect(result).toBe(true);
  });
});

import calcInterestRate from '../../src/simple/calcInterestRate';
describe('calcInterestRate', () => {
  test('returns true', () => {
    const result = calcInterestRate();
    expect(result).toBe(true);
  });
});

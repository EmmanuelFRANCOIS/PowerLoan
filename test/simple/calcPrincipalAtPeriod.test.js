import calcPrincipalAtPeriod from '../../src/simple/calcPrincipalAtPeriod';
describe('calcPrincipalAtPeriod', () => {
  test('returns true', () => {
    const result = calcPrincipalAtPeriod();
    expect(result).toBe(true);
  });
});

import calcRemainingCapitalAtPeriod from '../../src/simple/calcRemainingCapitalAtPeriod';
describe('calcRemainingCapitalAtPeriod', () => {
  test('returns true', () => {
    const result = calcRemainingCapitalAtPeriod();
    expect(result).toBe(true);
  });
});

import calcInterestsAtPeriod from '../../src/simple/calcInterestsAtPeriod';
describe('calcInterestsAtPeriod', () => {
  test('returns true', () => {
    const result = calcInterestsAtPeriod();
    expect(result).toBe(true);
  });
});

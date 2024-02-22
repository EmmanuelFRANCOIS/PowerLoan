import calcDurationPeriods from '../../src/common/calcDurationPeriods';
describe('calcDurationPeriods', () => {
  test('returns true', () => {
    const result = calcDurationPeriods();
    expect(result).toBe(true);
  });
});

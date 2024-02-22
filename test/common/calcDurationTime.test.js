import calcDurationTime from '../../src/common/calcDurationTime';
describe('calcDurationTime', () => {
  test('returns true', () => {
    const result = calcDurationTime();
    expect(result).toBe(true);
  });
});

import calcEndDate from '../../src/common/calcEndDate';
describe('calcEndDate', () => {
  test('returns true', () => {
    const result = calcEndDate();
    expect(result).toBe(true);
  });
});

import calcTotalInterests from '../../src/simple/calcTotalInterests';
describe('calcTotalInterests', () => {
  test('returns true', () => {
    const result = calcTotalInterests();
    expect(result).toBe(true);
  });
});

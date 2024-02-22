import calcCapital from '../../src/simple/calcCapital';
describe('calcCapital', () => {
  test('returns true', () => {
    const result = calcCapital();
    expect(result).toBe(true);
  });
});

import calcBeginDate from '../../src/common/calcBeginDate';
describe('calcBeginDate', () => {
  test('returns true', () => {
    const result = calcBeginDate();
    expect(result).toBe(true);
  });
});

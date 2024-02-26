import calcDurationPeriods from '../../src/common/calcDurationPeriods';

describe('calcDurationPeriods', () => {
  it('calculates the duration in periods correctly with monthly repayments', () => {
    const beginDate = '2024-01-01T12:00:00Z';
    const endDate = '2033-12-01T12:00:00Z';
    const repaymentPeriodicity = 1;
    const expectedPeriods = 120;
    expect(calcDurationPeriods(beginDate, endDate, repaymentPeriodicity)).toBe(expectedPeriods);
  });

  it('calculates the duration in periods correctly with quarterly repayments', () => {
    const beginDate = '2024-01-01T12:00:00Z';
    const endDate = '2033-12-01T12:00:00Z';
    const repaymentPeriodicity = 3;
    const expectedPeriods = 40;
    expect(calcDurationPeriods(beginDate, endDate, repaymentPeriodicity)).toBe(expectedPeriods);
  });

  it('throws an error for an invalid beginDate format', () => {
    const invalidBeginDate = 'invalid-date';
    const endDate = '2033-12-01T12:00:00Z';
    const repaymentPeriodicity = 1;
    expect(() => calcDurationPeriods(invalidBeginDate, endDate, repaymentPeriodicity)).toThrow('Invalid beginDate: Must be a valid date string in ISO 8601 format.');
  });

  it('throws an error for an invalid endDate format', () => {
    const beginDate = '2024-01-01T12:00:00Z';
    const invalidEndDate = 'not-a-date';
    const repaymentPeriodicity = 1;
    expect(() => calcDurationPeriods(beginDate, invalidEndDate, repaymentPeriodicity)).toThrow('Invalid endDate: Must be a valid date string in ISO 8601 format.');
  });

  it('throws an error for a non-integer repaymentPeriodicity', () => {
    const beginDate = '2024-01-01T12:00:00Z';
    const endDate = '2033-12-01T12:00:00Z';
    const nonIntegerRepaymentPeriodicity = 'monthly';
    expect(() => calcDurationPeriods(beginDate, endDate, nonIntegerRepaymentPeriodicity)).toThrow('Invalid repaymentPeriodicity: Must be a positive integer.');
  });

  it('throws an error for a negative repaymentPeriodicity', () => {
    const beginDate = '2024-01-01T12:00:00Z';
    const endDate = '2033-12-01T12:00:00Z';
    const negativeRepaymentPeriodicity = -1;
    expect(() => calcDurationPeriods(beginDate, endDate, negativeRepaymentPeriodicity)).toThrow('Invalid repaymentPeriodicity: Must be a positive integer.');
  });
});

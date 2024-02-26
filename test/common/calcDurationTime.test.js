import calcDurationTime from '../../src/common/calcDurationTime';

describe('calcDurationTime', () => {
  it('calculates the duration in months correctly for valid inputs', () => {
    const beginDate = '2024-01-01T12:00:00Z';
    const endDate = '2033-12-01T12:00:00Z';
    const repaymentPeriodicity = 1;
    const expectedMonths = 120;
    expect(calcDurationTime(beginDate, endDate, repaymentPeriodicity)).toBe(expectedMonths);
  });

  it('throws an error for invalid beginDate format', () => {
    const invalidBeginDate = 'not-a-real-date';
    const endDate = '2033-12-01T12:00:00Z';
    expect(() => calcDurationTime(invalidBeginDate, endDate)).toThrow('Invalid beginDate: Must be a valid date string in ISO 8601 format.');
  });

  it('throws an error for invalid endDate format', () => {
    const beginDate = '2024-01-01T12:00:00Z';
    const invalidEndDate = 'also-not-a-date';
    expect(() => calcDurationTime(beginDate, invalidEndDate)).toThrow('Invalid endDate: Must be a valid date string in ISO 8601 format.');
  });

  it('throws an error if endDate is before beginDate', () => {
    const beginDate = '2033-12-01T12:00:00Z';
    const endDate = '2024-01-01T12:00:00Z';
    expect(() => calcDurationTime(beginDate, endDate)).toThrow('endDate must be after beginDate.');
  });

  it('throws an error if duration in months is not a multiple of repaymentPeriodicity', () => {
    const beginDate = '2024-01-01T12:00:00Z';
    const endDate = '2033-10-01T12:00:00Z'; // Makes it 119 months
    const repaymentPeriodicity = 2; // Not a multiple of 119
    expect(() => calcDurationTime(beginDate, endDate, repaymentPeriodicity)).toThrow('The duration in months must be a multiple of the repaymentPeriodicity.');
  });

  it('calculates the duration in months correctly with non-default repaymentPeriodicity', () => {
    const beginDate = '2024-01-01T12:00:00Z';
    const endDate = '2033-12-01T12:00:00Z';
    const repaymentPeriodicity = 3; // Quarterly payments
    const expectedMonths = 120; // 40 periods of 3 months each
    expect(calcDurationTime(beginDate, endDate, repaymentPeriodicity)).toBe(expectedMonths);
  });
});

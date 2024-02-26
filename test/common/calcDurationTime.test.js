import calcDurationTime from '../../src/common/calcDurationTime';

describe('calcDurationTime', () => {
  it('calculates the duration in months correctly for valid inputs', () => {
    const beginDate = '2024-01-01T08:00:00+01:00';
    const endDate = '2033-12-01T08:00:00+01:00';
    const repaymentPeriodicity = 1;
    const expectedMonths = 120;
    expect(calcDurationTime(beginDate, endDate, repaymentPeriodicity)).toBe(expectedMonths);
  });

  it('throws an error for invalid beginDate format', () => {
    const invalidBeginDate = 'not-a-real-date';
    const endDate = '2033-12-01T08:00:00+01:00';
    expect(() => calcDurationTime(invalidBeginDate, endDate)).toThrow('Invalid beginDate: Must be a valid date string in ISO 8601 format.');
  });

  it('throws an error for invalid endDate format', () => {
    const beginDate = '2024-01-01T08:00:00+01:00';
    const invalidEndDate = 'also-not-a-date';
    expect(() => calcDurationTime(beginDate, invalidEndDate)).toThrow('Invalid endDate: Must be a valid date string in ISO 8601 format.');
  });

  it('throws an error if endDate is before beginDate', () => {
    const beginDate = '2033-12-01T08:00:00+01:00';
    const endDate = '2024-01-01T08:00:00+01:00';
    expect(() => calcDurationTime(beginDate, endDate)).toThrow('endDate must be after beginDate.');
  });

  it('throws an error if durationTime in months is not a multiple of repaymentPeriodicity', () => {
    const beginDate = '2024-01-01T08:00:00+01:00';
    const endDate = '2033-11-01T08:00:00+01:00'; // Makes it 120 months
    const repaymentPeriodicity = 2; // Not a multiple of 2
    expect(() => calcDurationTime(beginDate, endDate, repaymentPeriodicity)).toThrow('The durationTime in months must be a multiple of the repaymentPeriodicity.');
  });

});

import calcBeginDate from '../../src/common/calcBeginDate';

describe('calcBeginDate', () => {
  it('calculates the beginning date of a loan correctly with valid inputs', () => {
    const endDate = '2033-12-01T08:00:00+01:00';
    const durationMonths = 120;
    const expectedBeginDate = '2024-01-01T08:00:00+01:00';
    expect(calcBeginDate(endDate, durationMonths)).toBe(expectedBeginDate);
  });

  it('throws an error for an invalid endDate format', () => {
    const invalidEndDate = 'not-a-date';
    const durationMonths = 120;
    expect(() => calcBeginDate(invalidEndDate, durationMonths)).toThrow('Invalid endDate: Must be a valid date string in ISO 8601 format.');
  });

  it('throws an error for a non-integer durationTime', () => {
    const endDate = '2033-12-01T08:00:00+01:00';
    const nonIntegerDuration = 'twelve';
    expect(() => calcBeginDate(endDate, nonIntegerDuration)).toThrow('Invalid durationTime: Must be a positive integer.');
  });

  it('throws an error for a negative durationTime', () => {
    const endDate = '2033-12-01T08:00:00+01:00';
    const negativeDuration = -5;
    expect(() => calcBeginDate(endDate, negativeDuration)).toThrow('Invalid durationTime: Must be a positive integer.');
  });

  it('throws an error for zero durationTime', () => {
    const endDate = '2033-12-01T08:00:00+01:00';
    const zeroDuration = 0;
    expect(() => calcBeginDate(endDate, zeroDuration)).toThrow('Invalid durationTime: Must be a positive integer.');
  });
});

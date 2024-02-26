import calcEndDate from '../../src/common/calcEndDate';

describe('calcEndDate', () => {
  it('calculates the ending date of a loan correctly with valid inputs', () => {
    const beginDate = '2024-01-01T12:00:00Z';
    const durationTime = 120;
    const expectedEndDate = '2033-12-01T12:00:00Z';
    expect(calcEndDate(beginDate, durationTime)).toBe(expectedEndDate);
  });

  it('throws an error for an invalid beginDate format', () => {
    const invalidBeginDate = 'not-a-date';
    const durationTime = 120;
    expect(() => calcEndDate(invalidBeginDate, durationTime)).toThrow('Invalid beginDate: Must be a valid date string in ISO 8601 format.');
  });

  it('throws an error for a non-integer durationTime', () => {
    const beginDate = '2024-01-01T12:00:00Z';
    const nonIntegerDurationTime = 'a hundred';
    expect(() => calcEndDate(beginDate, nonIntegerDurationTime)).toThrow('Invalid durationTime: Must be a positive integer.');
  });

  it('throws an error for a negative durationTime', () => {
    const beginDate = '2024-01-01T12:00:00Z';
    const negativeDurationTime = -120;
    expect(() => calcEndDate(beginDate, negativeDurationTime)).toThrow('Invalid durationTime: Must be a positive integer.');
  });

  it('calculates the ending date correctly for a short duration loan', () => {
    const beginDate = '2024-01-01T12:00:00Z';
    const durationTime = 1; // 1 month duration
    const expectedEndDate = '2024-01-01T12:00:00Z'; // Same as beginDate because duration is 1 month
    expect(calcEndDate(beginDate, durationTime)).toBe(expectedEndDate);
  });
});
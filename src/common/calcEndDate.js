import dayjs from 'dayjs';
import validation from '../helpers/validation.js';

/**
 * Calculates the ending date of a loan based on its beginning date and duration in months.
 * @param {string} beginDate - The beginning date of the loan in ISO 8601 format.
 * @param {number} durationTime - The duration of the loan in months.
 * @returns {string} The ending date of the loan in ISO 8601 format.
 * @example
 * // if beginDate = '2024-01-01T08:00:00+01:00', durationPeriods = 120,
 * // it should return '2033-12-01T08:00:00+01:00'.
 * calcEndDate('2024-01-01T08:00:00+01:00', 120);
 */
function calcEndDate(beginDate, durationTime) {
  // Validate beginDate as a valid date string
  if (!validation.isDate(beginDate)) {
    throw new Error('Invalid beginDate: Must be a valid date string in ISO 8601 format.');
  }

  // Validate durationTime as an integer
  if (!validation.isInteger(durationTime) || durationTime <= 0) {
    throw new Error('Invalid durationTime: Must be a positive integer.');
  }

  // Perform the calculation
  const endDate = dayjs(beginDate).add(durationTime - 1, 'month').format('YYYY-MM-01T08:00:00Z');

  return endDate;
}

export default calcEndDate;

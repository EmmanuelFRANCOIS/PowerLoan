import dayjs from 'dayjs';
import validation from '../helpers/validation.js';

/**
 * Calculates the beginning date of a loan based on its end date and duration in months.
 * @param {string} endDate - The end date of the loan in ISO 8601 format.
 * @param {number} durationTime - The duration of the loan in months.
 * @returns {string} The beginning date of the loan in ISO 8601 format.
 * @example
 * // if endDate = '2033-12-01T12:00:00Z', durationMonths = 120,
 * // it should return '2024-01-01T12:00:00Z'.
 * calcBeginDate('2033-12-01T12:00:00Z', 120);
 */
function calcBeginDate(endDate, durationTime) {
  // Validate endDate as a valid date string
  if (!validation.isDate(endDate)) {
    throw new Error('Invalid endDate: Must be a valid date string in ISO 8601 format.');
  }

  // Validate durationTime as an integer
  if (!validation.isInteger(durationTime) || durationTime <= 0) {
    throw new Error('Invalid durationTime: Must be a positive integer.');
  }

  // Perform the calculation
  const beginDate = dayjs(endDate).subtract(durationTime - 1, 'month').format();

  return beginDate;
}

export default calcBeginDate;

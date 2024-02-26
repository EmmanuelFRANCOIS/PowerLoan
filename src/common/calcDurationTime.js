import dayjs from 'dayjs';
import validation from '../helpers/validation.js';

/**
 * Calculates the duration in months of a loan based on its beginning and ending dates.
 * @param {string} beginDate - The beginning date of the loan in ISO 8601 format.
 * @param {string} endDate - The ending date of the loan in ISO 8601 format.
 * @param {number} repaymentPeriodicity - The periodicity of repayments in months. Defaults to 1.
 * @returns {number} The duration of the loan in months.
 * @throws Will throw an error if the beginDate or endDate are not valid ISO 8601 dates,
 * or if the endDate is before or equal to the beginDate,
 * or if the duration in months is not a multiple of the repaymentPeriodicity.
 * @example
 * // If beginDate = '2024-01-01T12:00:00Z' and endDate = '2033-12-01T12:00:00Z',
 * // it should return 120.
 * calcDurationTime('2024-01-01T12:00:00Z', '2033-12-01T12:00:00Z', 1);
 */
function calcDurationTime(beginDate, endDate, repaymentPeriodicity = 1) {
  // Validate inputs
  if (!validation.isDate(beginDate)) {
    throw new Error('Invalid beginDate: Must be a valid date string in ISO 8601 format.');
  }
  if (!validation.isDate(endDate)) {
    throw new Error('Invalid endDate: Must be a valid date string in ISO 8601 format.');
  }
  if (!validation.isInteger(repaymentPeriodicity) || repaymentPeriodicity <= 0) {
    throw new Error('Invalid repaymentPeriodicity: Must be a positive integer.');
  }

  // Calculate duration in months
  const begin = dayjs(beginDate).startOf('month');
  const end = dayjs(endDate).startOf('month');
  if (end.isBefore(begin)) {
    throw new Error('endDate must be after beginDate.');
  }

  const durationTime = end.diff(begin, 'month') + 1;
  if (durationTime % repaymentPeriodicity !== 0) {
    throw new Error('The duration in months must be a multiple of the repaymentPeriodicity.');
  }

  return durationTime;
}

export default calcDurationTime;

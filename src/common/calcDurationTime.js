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
 * or if the durationTime in months is not a multiple of the repaymentPeriodicity.
 * @example
 * // If beginDate = '2024-01-01T08:00:00+01:00' and endDate = '2033-12-01T08:00:00+01:00',
 * // it should return 120.
 * calcDurationTime('2024-01-01T08:00:00+01:00', '2033-12-01T08:00:00+01:00', 2);
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

  // Adjust begin and end dates to 1rst of month
  const begin = dayjs(beginDate).startOf('month');
  const end = dayjs(endDate).startOf('month');

  // Check that end date is after begin date
  if (end.isBefore(begin)) {
    throw new Error('endDate must be after beginDate.');
  }

  // Calculate duration in months
  const durationTime = end.diff(begin, 'month') + 1;

  // Check that durationTime is a multiple of repaymentPeriodicity
  if (durationTime % repaymentPeriodicity !== 0) {
    throw new Error('The durationTime in months must be a multiple of the repaymentPeriodicity.');
  }

  return durationTime;
}

export default calcDurationTime;

import dayjs from 'dayjs';
import validation from '../helpers/validation.js';

/**
 * Calculates the duration in periods of a loan based on the beginning and ending dates, 
 * and the repayment periodicity.
 * @param {string} beginDate - The beginning date of the loan in ISO 8601 format.
 * @param {string} endDate - The ending date of the loan in ISO 8601 format.
 * @param {number} repaymentPeriodicity - The periodicity of repayments in months. Defaults to 1 (monthly).
 * @returns {number} The duration of the loan in periods.
 * @example
 * // If beginDate = '2024-01-01T08:00:00+01:00', endDate = '2033-12-01T08:00:00+01:00', and repaymentPeriodicity = 1,
 * // it should return 120.
 * calcDurationPeriods('2024-01-01T08:00:00+01:00', '2033-12-01T08:00:00+01:00', 1);
 * @example
 * // If beginDate = '2024-01-01T08:00:00+01:00', endDate = '2033-12-01T08:00:00+01:00', and repaymentPeriodicity = 3,
 * // it should return 40.
 * calcDurationPeriods('2024-01-01T08:00:00+01:00', '2033-12-01T08:00:00+01:00', 3);
 */
function calcDurationPeriods(beginDate, endDate, repaymentPeriodicity = 1) {
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

  // Calculation
  const durationMonths = dayjs(endDate).diff(dayjs(beginDate), 'month') + 1;
  const durationPeriods = Math.ceil(durationMonths / repaymentPeriodicity);

  return durationPeriods;
}

export default calcDurationPeriods;

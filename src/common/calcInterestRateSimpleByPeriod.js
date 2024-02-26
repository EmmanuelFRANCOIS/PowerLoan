import Big from 'big.js';
import validation from '../helpers/validation.js';

/**
 * Calculates the interest rate per period for simple interests.
 * @param {number} interestRate - The annual interest rate (as a decimal, not a percentage).
 * @param {number} repaymentPeriodicity - The number of repayments per year.
 * @returns {number} The interest rate per period.
 * @throws Will throw an error for invalid input values.
 * @example
 * // For an annual interest rate of 5% and monthly repayments:
 * calcInterestRateSimpleByPeriod(0.05, 12);
 */
function calcInterestRateSimpleByPeriod(interestRate, repaymentPeriodicity) {
  // Validate inputs
  if (!validation.isNumber(interestRate) || interestRate < 0 || interestRate > 1) {
    throw new Error('Invalid interestRate: Must be a positive decimal number between 0 and 1.');
  }
  if (!validation.isInteger(repaymentPeriodicity) || repaymentPeriodicity <= 0) {
    throw new Error('Invalid repaymentPeriodicity: Must a positive integer in [12, 6, 4, 3, 2, 1].');
  }

  // Convert inputs to Big.js for precise calculations
  const annualRate = new Big(interestRate);
  const periods = new Big(repaymentPeriodicity);

  // Calculate the interest rate per period
  const interestRatePerPeriod = annualRate.div(periods);

  return interestRatePerPeriod.toNumber();
}

export default calcInterestRateSimpleByPeriod;

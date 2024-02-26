import Big from 'big.js';
import validation from '../helpers/validation.js';

/**
 * Calculates the interest rate per period for simple interests.
 * @param {number} annualInterestRate - The annual interest rate (as a decimal, not a percentage).
 * @param {number} repaymentPeriodicity - The number of repayments per year.
 * @returns {number} The interest rate per period.
 * @throws Will throw an error for invalid input values.
 * @example
 * // For an annual interest rate of 5% and monthly repayments:
 * calcInterestRateSimpleByPeriod(0.05, 12);
 */
function calcInterestRateSimpleByPeriod(annualInterestRate, repaymentPeriodicity) {
  // Validate inputs
  if (!validation.isNumber(annualInterestRate) || annualInterestRate < 0) {
    throw new Error('Invalid annualInterestRate: Must be a non-negative number.');
  }
  if (!validation.isInteger(repaymentPeriodicity) || repaymentPeriodicity <= 0) {
    throw new Error('Invalid repaymentPeriodicity: Must be a positive integer.');
  }

  // Convert inputs to Big.js for precise calculations
  const annualRate = new Big(annualInterestRate);
  const periods = new Big(repaymentPeriodicity);

  // Calculate the interest rate per period
  const interestRatePerPeriod = annualRate.div(periods);

  return interestRatePerPeriod.toNumber();
}

export default calcInterestRateSimpleByPeriod;

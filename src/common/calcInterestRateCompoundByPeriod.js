import Big from 'big.js';
import validation from '../helpers/validation.js';

/**
 * Calculates the interest rate per period for compound interests.
 * @param {number} interestRate - The annual interest rate (as a decimal, not a percentage).
 * @param {number} repaymentPeriodicity - The number of repayments per year.
 * @returns {number} The interest rate per period for compound interests.
 * @throws Will throw an error for invalid input values.
 * @example
 * // For an annual interest rate of 5% and monthly repayments:
 * calcInterestRateCompoundByPeriod(0.05, 12);
 */
function calcInterestRateCompoundByPeriod(interestRate, repaymentPeriodicity) {
  // Validate inputs
  if (!validation.isNumber(interestRate) || interestRate < 0) {
    throw new Error('Invalid interestRate: Must be a non-negative number.');
  }
  if (!validation.isInteger(repaymentPeriodicity) || repaymentPeriodicity <= 0) {
    throw new Error('Invalid repaymentPeriodicity: Must be a positive integer.');
  }

  // Convert inputs to Big.js for precise calculations
  const annualRate = new Big(interestRate);
  const periods = new Big(repaymentPeriodicity);

  // Calculate the interest rate per period for compound interest
  // Formula: (1 + annualRate)^(1/periods) - 1
  const one = new Big(1);
  const interestRatePerPeriod = one.plus(annualRate).pow(one.div(periods)).minus(one);

  return interestRatePerPeriod.toNumber();
}

export default calcInterestRateCompoundByPeriod;

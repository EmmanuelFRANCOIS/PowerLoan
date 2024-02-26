import Big from 'big.js';
import validation from '../helpers/validation.js';

/**
 * Calculates the annual interest rate for a loan with simple interests.
 * @param {number} capital - The capital borrowed.
 * @param {number} repayment - The repayment amount per period.
 * @param {number} durationPeriods - The total number of repayment periods.
 * @param {number} repaymentPeriodicity - The number of repayments per year.
 * @returns {number} The annual interest rate as a decimal.
 * @throws Will throw an error for invalid input values.
 * @example
 * // For a loan of $10,000, with monthly payments of $500 over 2 years (24 periods):
 * calcInterestRateSimple(10000, 500, 24, 12);
 */
function calcInterestRateSimpleInterest(capital, repayment, durationPeriods, repaymentPeriodicity) {

  // Validate inputs
  if (!validation.isInteger(capital) || capital < 100) {
    throw new Error('Invalid capital: Must be a positive integer >= 100.');
  }
  if (!validation.isNumber(repayment) || repayment > 1) {
    throw new Error('Invalid repayment: Must be a positive decimal number >= 0.');
  }
  if (!validation.isInteger(durationPeriods) || durationPeriods <= 0) {
    throw new Error('Invalid durationPeriods: Must be a positive integer >= 1.');
  }
  if (![12, 6, 4, 3, 2, 1].includes(repaymentPeriodicity)) {
    throw new Error('Invalid repaymentPeriodicity: Must be a number in 12, 6, 4, 3, 2 or 1.');
  }

  // Convert inputs to Big.js for precise calculations
  const P = new Big(capital);
  const R = new Big(repayment);
  const n = new Big(durationPeriods);
  const periodicity = new Big(repaymentPeriodicity);

  // Calculate the total payments made over the life of the loan
  const TP = R.times(n);

  // Calculate the duration in years
  const years = n.div(periodicity);

  // Calculate the total interest paid
  const totalInterests = TP.minus(P);

  // Calculate the annual interest rate
  const interestRate = totalInterests.div(P.mul(years));

  return interestRate.toNumber();

}

export default calcInterestRateSimpleInterest;

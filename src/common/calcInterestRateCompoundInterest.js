import Big from 'big.js';
import validation from '../helpers/validation.js';
import calcPresentValueCompoundInterests from './calcPresentValueCompoundInterests.js'; // Assuming correct path

/**
 * Calculates the compound interest rate using the bisection method.
 * @param {number} capital - The principal amount of the loan.
 * @param {number} repayment - The amount paid per period.
 * @param {number} durationPeriods - The total number of payment periods.
 * @param {number} repaymentPeriodicity - The number of payments per year.
 * @returns {number} The annual compound interest rate.
 * @throws Will throw an error for invalid input values.
 * @example
 * // For a loan with $10,000 principal, $500 monthly repayment over 2 years (24 periods):
 * calcInterestRateCompound(10000, 500, 24, 12);
 */
function calcInterestRateCompound(capital, repayment, durationPeriods, repaymentPeriodicity) {

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

  let lowRate = new Big(0); // Starting with 0% as the lowest possible rate
  let highRate = new Big(1); // Starting with 100% as the highest reasonable initial guess
  let midRate, presentValue;
  const tolerance = new Big(0.0001); // Convergence tolerance
  const maxIterations = 100; // Prevent infinite loops
  let iteration = 0;

  // The total future value of all payments (assuming end-of-period payments)
  const totalFutureValue = new Big(repayment).times(durationPeriods);

  while (lowRate.lt(highRate) && iteration < maxIterations) {
    iteration++;
    midRate = lowRate.plus(highRate).div(2);
    presentValue = calcPresentValueCompoundInterests(totalFutureValue, midRate, durationPeriods, "ordinary");

    if (new Big(presentValue).minus(capital).abs().lte(tolerance)) {
      break; // Found the rate close enough to the actual value
    } else if (new Big(presentValue).gt(capital)) {
      highRate = midRate;
    } else {
      lowRate = midRate;
    }
  }

  // Convert the annual rate from decimal back to a percentage and adjust for repayment periodicity
  return midRate.times(repaymentPeriodicity).toNumber();
}

export default calcInterestRateCompound;

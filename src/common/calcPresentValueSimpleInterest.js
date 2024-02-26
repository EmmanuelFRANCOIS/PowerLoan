import Big from 'big.js';
import validation from '../helpers/validation.js';

/**
 * Calculates the present value of an annuity for a simple interest loan.
 * @param {number} capital - The future value of the annuity.
 * @param {number} interestRate - The annual interest rate (as a decimal).
 * @param {number} durationPeriods - The total number of periods.
 * @param {string} annuityType - The type of annuity ("ordinary" or "due"). Defaults to "ordinary".
 * @returns {number} The present value of the annuity.
 * @throws Will throw an error for invalid input values.
 * @example
 * // For an annuity with $10,000 future value, 5% interest rate, over 10 periods,
 * // with ordinary annuity type:
 * calcPresentValueSimpleInterests(10000, 0.05, 10, "ordinary");
 */
function calcPresentValueSimpleInterests(capital, interestRate, durationPeriods, annuityType = "ordinary") {
  // Validate inputs
  if (!validation.isNumber(capital) || capital <= 0) {
    throw new Error('Invalid capital: Must be a positive number.');
  }
  if (!validation.isNumber(interestRate) || interestRate < 0) {
    throw new Error('Invalid interestRate: Must be a non-negative number.');
  }
  if (!validation.isInteger(durationPeriods) || durationPeriods <= 0) {
    throw new Error('Invalid durationPeriods: Must be a positive integer.');
  }
  if (!['ordinary', 'due'].includes(annuityType)) {
    throw new Error('Invalid annuityType: Must be "ordinary" or "due".');
  }

  // Convert inputs to Big.js for precise calculations
  const FV = new Big(capital);
  const r = new Big(interestRate);
  const n = new Big(durationPeriods);

  // Calculate present value
  let presentValue;
  if (r.eq(0)) {
    // Handle zero interest rate case
    presentValue = FV.div(n);
  } else {
    // Simple interest formula for annuity
    const totalInterest = FV.times(r).times(n);
    presentValue = FV.minus(totalInterest);

    if (annuityType === "due") {
      // Adjust present value for annuity due
      presentValue = presentValue.plus(FV.times(r));
    }
  }

  return presentValue.toNumber();
}

export default calcPresentValueSimpleInterests;

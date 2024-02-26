import Big from 'big.js';
import validation from '../helpers/validation.js';

/**
 * Calculates the present value of an annuity for a compound interest loan.
 * @param {number} capital - The future value of the annuity.
 * @param {number} interestRate - The annual interest rate (as a decimal).
 * @param {number} durationPeriods - The total number of periods.
 * @param {string} annuityType - The type of annuity ("ordinary" or "due"). Defaults to "ordinary".
 * @returns {number} The present value of the annuity.
 * @throws Will throw an error for invalid input values.
 * @example
 * // For an annuity with $10,000 future value, 5% interest rate, over 10 periods,
 * // with ordinary annuity type:
 * calcPresentValueCompoundInterest(10000, 0.05, 10, "ordinary");
 */
function calcPresentValueCompoundInterest(capital, interestRate, durationPeriods, annuityType = "ordinary") {
  // Validate inputs
  if (!validation.isNumber(capital) || capital < 100) {
    throw new Error('Invalid capital: Must be a positive number >= 100.');
  }
  if (!validation.isNumber(interestRate) || interestRate < 0 || interestRate > 1) {
    throw new Error('Invalid interestRate: Must be a positive decimal number between 0 and 1.');
  }
  if (!validation.isInteger(durationPeriods) || durationPeriods < 1) {
    throw new Error('Invalid durationPeriods: Must be a positive integer >= 1.');
  }
  if (!['ordinary', 'due'].includes(annuityType)) {
    throw new Error('Invalid annuityType: Must be "ordinary" or "due".');
  }

  // Convert inputs to Big.js for precise calculations
  const FV = new Big(capital);
  const r = new Big(interestRate);
  const n = new Big(durationPeriods);

  let presentValue;
  if (r.eq(0)) {
    // Handle zero interest rate case
    presentValue = FV.div(n);
  } else {
    // Compound interest formula for annuity present value
    const compoundFactor = Big(1).plus(r);
    if (annuityType === "ordinary") {
      presentValue = FV.div(compoundFactor.pow(n));
    } else { // annuityType === "due"
      presentValue = FV.div(compoundFactor.pow(n.minus(1)));
    }
  }

  return presentValue.toNumber();
}

export default calcPresentValueCompoundInterest;

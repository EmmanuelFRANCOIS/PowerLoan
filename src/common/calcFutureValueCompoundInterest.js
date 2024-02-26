import Big from 'big.js';
import validation from '../helpers/validation.js';

/**
 * Calculates the future value of an annuity for a compound interest loan.
 * @param {number} capital - The principal amount of the loan.
 * @param {number} interestRate - The annual interest rate (as a decimal).
 * @param {number} durationPeriods - The total number of periods.
 * @param {string} annuityType - The type of annuity ("ordinary" or "due"). Defaults to "ordinary".
 * @param {number} startingAmount - The starting amount ($). Defaults to 0.
 * @returns {number} The future value of the annuity.
 * @throws Will throw an error for invalid input values.
 * @example
 * // For a loan with $10,000 capital, 5% interest rate, over 10 periods,
 * // with ordinary annuity type and no starting amount:
 * calcFutureValueCompoundInterest(10000, 0.05, 10, "ordinary", 0);
 */
function calcFutureValueCompoundInterest(capital, interestRate, durationPeriods, annuityType = "ordinary", startingAmount = 0) {
  // Validate inputs
  if (!validation.isInteger(capital) || capital < 100) {
    throw new Error('Invalid capital: Must be a positive integer >= 100.');
  }
  if (!validation.isNumber(interestRate) || interestRate < 0 || interestRate > 1) {
    throw new Error('Invalid interestRate: Must be a positive decimal number between 0 and 1.');
  }
  if (!validation.isInteger(durationPeriods) || durationPeriods <= 0) {
    throw new Error('Invalid durationPeriods: Must be a positive integer >= 1.');
  }
  if (!['ordinary', 'due'].includes(annuityType)) {
    throw new Error('Invalid annuityType: Must be "ordinary" or "due".');
  }
  if (!validation.isNumber(startingAmount)) {
    throw new Error('Invalid startingAmount: Must be a positive number >= 0.');
  }

  // Convert inputs to Big.js for precise calculations
  const P = new Big(capital);
  const r = new Big(interestRate);
  const n = new Big(durationPeriods);
  const S = new Big(startingAmount);

  // Calculate future value
  let futureValue;
  if (r.eq(0)) {
    // Handle zero interest rate case
    futureValue = P.mul(n).plus(S);
  } else {
    // Compound interest formula for annuity
    const compoundFactor = r.plus(1).pow(durationPeriods);
    futureValue = P.times(compoundFactor);

    if (annuityType === "ordinary") {
      futureValue = futureValue.minus(P);
    } else { // annuityType === "due"
      futureValue = futureValue.times(r.plus(1));
    }

    futureValue = futureValue.plus(S);
  }

  return parseFloat(futureValue);
}

export default calcFutureValueCompoundInterest;

// src/common/index.js

// Import each function from its file
import calcBeginDate from './calcBeginDate';
import calcEndDate from './calcEndDate';
import calcDurationPeriods from './calcDurationPeriods';
import calcDurationTime from './calcDurationTime';
import calcPresentValueCompoundInterest from './calcPresentValueCompoundInterest';
import calcPresentValueSimpleInterest from './calcPresentValueSimpleInterest';
import calcFutureValueCompoundInterest from './calcFutureValueCompoundInterest';
import calcFutureValueSimpleInterest from './calcFutureValueSimpleInterest';
import calcInterestRateByPeriod from './calcInterestRateByPeriod';
import calcInterestRateCompoundInterest from './calcInterestRateCompoundInterest';
import calcInterestRateSimpleInterest from './calcInterestRateSimpleInterest';

// Optionally, provide named exports for individual imports
export {
    calcBeginDate,
    calcEndDate,
    calcDurationPeriods,
    calcDurationTime,
    calcPresentValueCompoundInterest,
    calcPresentValueSimpleInterest,
    calcFutureValueCompoundInterest,
    calcFutureValueSimpleInterest,
    calcInterestRateByPeriod,
    calcInterestRateCompoundInterest,
    calcInterestRateSimpleInterest
  };
  
// Group all functions under the "common" namespace
const common = {
  calcBeginDate,
  calcEndDate,
  calcDurationPeriods,
  calcDurationTime,
  calcPresentValueCompoundInterest,
  calcPresentValueSimpleInterest,
  calcFutureValueCompoundInterest,
  calcFutureValueSimpleInterest,
  calcInterestRateByPeriod,
  calcInterestRateCompoundInterest,
  calcInterestRateSimpleInterest
};

// Using ES6 default export for the common namespace
export default common;


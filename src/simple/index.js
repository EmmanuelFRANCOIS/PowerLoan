// src/simple/index.js

// Import each function from its respective file
import calcCapital from './calcCapital';
import calcInterestRate from './calcInterestRate';
import calcRepayment from './calcRepayment';
import calcTotalRepayments from './calcTotalRepayments';
import calcTotalInterests from './calcTotalInterests';
import calcRepaymentAtPeriod from './calcRepaymentAtPeriod';
import calcPrincipalAtPeriod from './calcPrincipalAtPeriod';
import calcInterestsAtPeriod from './calcInterestsAtPeriod';
import calcRemainingCapitalAtPeriod from './calcRemainingCapitalAtPeriod';
import calcRemainingRepaymentsAmountAtPeriod from './calcRemainingRepaymentsAmountAtPeriod';
import calcRemainingRepaymentsNumberAtPeriod from './calcRemainingRepaymentsNumberAtPeriod';

// Optionally, provide named exports for individual imports
export {
  calcCapital,
  calcInterestRate,
  calcRepayment,
  calcTotalRepayments,
  calcTotalInterests,
  calcRepaymentAtPeriod,
  calcPrincipalAtPeriod,
  calcInterestsAtPeriod,
  calcRemainingCapitalAtPeriod,
  calcRemainingRepaymentsAmountAtPeriod,
  calcRemainingRepaymentsNumberAtPeriod
};

// Export all functions under the "simple" namespace
const simple = {
  calcCapital,
  calcInterestRate,
  calcRepayment,
  calcTotalRepayments,
  calcTotalInterests,
  calcRepaymentAtPeriod,
  calcPrincipalAtPeriod,
  calcInterestsAtPeriod,
  calcRemainingCapitalAtPeriod,
  calcRemainingRepaymentsAmountAtPeriod,
  calcRemainingRepaymentsNumberAtPeriod
};

// Using ES6 default export for the simple namespace
export default simple;

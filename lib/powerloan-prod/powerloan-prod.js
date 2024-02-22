/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

// UNUSED EXPORTS: advanced, advancedLoan, common, simple, simpleLoan

;// CONCATENATED MODULE: ./src/simpleLoan/simpleLoan.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Represents a simple loan with properties and methods to manipulate and calculate loan data.
 */
var simpleLoan_SimpleLoan = /*#__PURE__*/_createClass(
/**
 * Constructs a SimpleLoan loanInstance with provided data or default values.
 * @param {Object} loanData - Data to initialize the loan properties.
 */
function SimpleLoan() {
  var _this = this;
  var loanData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  _classCallCheck(this, SimpleLoan);
  Object.keys(SimpleLoan.defaultSimpleLoan).forEach(function (key) {
    _this["_".concat(key)] = loanData[key] || SimpleLoan.defaultSimpleLoan[key];
  });
  // Additional initialization or validation logic can go here
});
/**
 * Default properties for a simple loan.
 */
_defineProperty(simpleLoan_SimpleLoan, "defaultSimpleLoan", {
  id: null,
  // Auto increment (from db), no default in class, should be set externally
  uuid: uuidv4(),
  lender: "",
  lenderContact: "",
  lenderAddress: "",
  lenderContactPhone: "",
  lenderContactEmail: "",
  lenderContractRef: "",
  lenderContractDate: "",
  destination: "realEstate",
  active: false,
  calculationMode: "repayment",
  capital: 100000,
  beginDate: moment().add(1, "months").startOf("month").format("YYYY-MM-DDT12:00:00Z"),
  endDate: moment().add(121, "months").startOf("month").format("YYYY-MM-DDT12:00:00Z"),
  durationPeriods: 120,
  durationTime: 120,
  interestType: "simple",
  interestRate: 0.03,
  repaymentPeriodicity: "monthly",
  repayment: 1000
});
/* harmony default export */ const simpleLoan = ((/* unused pure expression or super */ null && (simpleLoan_SimpleLoan)));
;// CONCATENATED MODULE: ./src/common/calcBeginDate.js
function calcBeginDate() {
  // Placeholder code
  return true;
}
/* harmony default export */ const common_calcBeginDate = (calcBeginDate);
;// CONCATENATED MODULE: ./src/common/calcEndDate.js
function calcEndDate() {
  // Placeholder code
  return true;
}
/* harmony default export */ const common_calcEndDate = (calcEndDate);
;// CONCATENATED MODULE: ./src/common/calcDurationPeriods.js
function calcDurationPeriods() {
  // Placeholder code
  return true;
}
/* harmony default export */ const common_calcDurationPeriods = (calcDurationPeriods);
;// CONCATENATED MODULE: ./src/common/calcDurationTime.js
function calcDurationTime() {
  // Placeholder code
  return true;
}
/* harmony default export */ const common_calcDurationTime = (calcDurationTime);
;// CONCATENATED MODULE: ./src/common/calcPresentValueCompoundInterest.js
function calcPresentValueCompoundInterest() {
  // Placeholder code
  return true;
}
/* harmony default export */ const common_calcPresentValueCompoundInterest = (calcPresentValueCompoundInterest);
;// CONCATENATED MODULE: ./src/common/calcPresentValueSimpleInterest.js
function calcPresentValueSimpleInterest() {
  // Placeholder code
  return true;
}
/* harmony default export */ const common_calcPresentValueSimpleInterest = (calcPresentValueSimpleInterest);
;// CONCATENATED MODULE: ./src/common/calcFutureValueCompoundInterest.js
function calcFutureValueCompoundInterest() {
  // Placeholder code
  return true;
}
/* harmony default export */ const common_calcFutureValueCompoundInterest = (calcFutureValueCompoundInterest);
;// CONCATENATED MODULE: ./src/common/calcFutureValueSimpleInterest.js
function calcFutureValueSimpleInterest() {
  // Placeholder code
  return true;
}
/* harmony default export */ const common_calcFutureValueSimpleInterest = (calcFutureValueSimpleInterest);
;// CONCATENATED MODULE: ./src/common/calcInterestRateByPeriod.js
function calcInterestRateByPeriod() {
  // Placeholder code
  return true;
}
/* harmony default export */ const common_calcInterestRateByPeriod = (calcInterestRateByPeriod);
;// CONCATENATED MODULE: ./src/common/calcInterestRateCompoundInterest.js
function calcInterestRateCompoundInterest() {
  // Placeholder code
  return true;
}
/* harmony default export */ const common_calcInterestRateCompoundInterest = (calcInterestRateCompoundInterest);
;// CONCATENATED MODULE: ./src/common/calcInterestRateSimpleInterest.js
function calcInterestRateSimpleInterest() {
  // Placeholder code
  return true;
}
/* harmony default export */ const common_calcInterestRateSimpleInterest = (calcInterestRateSimpleInterest);
;// CONCATENATED MODULE: ./src/common/index.js
// src/common/index.js

// Import each function from its file












// Optionally, provide named exports for individual imports


// Group all functions under the "common" namespace
var common = {
  calcBeginDate: common_calcBeginDate,
  calcEndDate: common_calcEndDate,
  calcDurationPeriods: common_calcDurationPeriods,
  calcDurationTime: common_calcDurationTime,
  calcPresentValueCompoundInterest: common_calcPresentValueCompoundInterest,
  calcPresentValueSimpleInterest: common_calcPresentValueSimpleInterest,
  calcFutureValueCompoundInterest: common_calcFutureValueCompoundInterest,
  calcFutureValueSimpleInterest: common_calcFutureValueSimpleInterest,
  calcInterestRateByPeriod: common_calcInterestRateByPeriod,
  calcInterestRateCompoundInterest: common_calcInterestRateCompoundInterest,
  calcInterestRateSimpleInterest: common_calcInterestRateSimpleInterest
};

// Using ES6 default export for the common namespace
/* harmony default export */ const src_common = ((/* unused pure expression or super */ null && (common)));
;// CONCATENATED MODULE: ./src/simple/calcCapital.js
function calcCapital() {
  // Placeholder code
  return true;
}
/* harmony default export */ const simple_calcCapital = (calcCapital);
;// CONCATENATED MODULE: ./src/simple/calcInterestRate.js
function calcInterestRate() {
  // Placeholder code
  return true;
}
/* harmony default export */ const simple_calcInterestRate = (calcInterestRate);
;// CONCATENATED MODULE: ./src/simple/calcRepayment.js
function calcRepayment() {
  // Placeholder code
  return true;
}
/* harmony default export */ const simple_calcRepayment = (calcRepayment);
;// CONCATENATED MODULE: ./src/simple/calcTotalRepayments.js
function calcTotalRepayments() {
  // Placeholder code
  return true;
}
/* harmony default export */ const simple_calcTotalRepayments = (calcTotalRepayments);
;// CONCATENATED MODULE: ./src/simple/calcTotalInterests.js
function calcTotalInterests() {
  // Placeholder code
  return true;
}
/* harmony default export */ const simple_calcTotalInterests = (calcTotalInterests);
;// CONCATENATED MODULE: ./src/simple/calcRepaymentAtPeriod.js
function calcRepaymentAtPeriod() {
  // Placeholder code
  return true;
}
/* harmony default export */ const simple_calcRepaymentAtPeriod = (calcRepaymentAtPeriod);
;// CONCATENATED MODULE: ./src/simple/calcPrincipalAtPeriod.js
function calcPrincipalAtPeriod() {
  // Placeholder code
  return true;
}
/* harmony default export */ const simple_calcPrincipalAtPeriod = (calcPrincipalAtPeriod);
;// CONCATENATED MODULE: ./src/simple/calcInterestsAtPeriod.js
function calcInterestsAtPeriod() {
  // Placeholder code
  return true;
}
/* harmony default export */ const simple_calcInterestsAtPeriod = (calcInterestsAtPeriod);
;// CONCATENATED MODULE: ./src/simple/calcRemainingCapitalAtPeriod.js
function calcRemainingCapitalAtPeriod() {
  // Placeholder code
  return true;
}
/* harmony default export */ const simple_calcRemainingCapitalAtPeriod = (calcRemainingCapitalAtPeriod);
;// CONCATENATED MODULE: ./src/simple/calcRemainingRepaymentsAmountAtPeriod.js
function calcRemainingRepaymentsAmountAtPeriod() {
  // Placeholder code
  return true;
}
/* harmony default export */ const simple_calcRemainingRepaymentsAmountAtPeriod = (calcRemainingRepaymentsAmountAtPeriod);
;// CONCATENATED MODULE: ./src/simple/calcRemainingRepaymentsNumberAtPeriod.js
function calcRemainingRepaymentsNumberAtPeriod() {
  // Placeholder code
  return true;
}
/* harmony default export */ const simple_calcRemainingRepaymentsNumberAtPeriod = (calcRemainingRepaymentsNumberAtPeriod);
;// CONCATENATED MODULE: ./src/simple/index.js
// src/simple/index.js

// Import each function from its respective file












// Optionally, provide named exports for individual imports


// Export all functions under the "simple" namespace
var simple = {
  calcCapital: simple_calcCapital,
  calcInterestRate: simple_calcInterestRate,
  calcRepayment: simple_calcRepayment,
  calcTotalRepayments: simple_calcTotalRepayments,
  calcTotalInterests: simple_calcTotalInterests,
  calcRepaymentAtPeriod: simple_calcRepaymentAtPeriod,
  calcPrincipalAtPeriod: simple_calcPrincipalAtPeriod,
  calcInterestsAtPeriod: simple_calcInterestsAtPeriod,
  calcRemainingCapitalAtPeriod: simple_calcRemainingCapitalAtPeriod,
  calcRemainingRepaymentsAmountAtPeriod: simple_calcRemainingRepaymentsAmountAtPeriod,
  calcRemainingRepaymentsNumberAtPeriod: simple_calcRemainingRepaymentsNumberAtPeriod
};

// Using ES6 default export for the simple namespace
/* harmony default export */ const src_simple = ((/* unused pure expression or super */ null && (simple)));
;// CONCATENATED MODULE: ./src/simpleLoan/index.js
// src/simpleLoan/index.js

// Import the SimpleLoan class


// Import common functions


// Import simple functions


// Re-export common and simple functions for external use


// Export SimpleLoan class as the default export
/* harmony default export */ const src_simpleLoan = ((/* unused pure expression or super */ null && (SimpleLoan)));
;// CONCATENATED MODULE: ./src/advancedLoan/advancedLoan.js
function advancedLoan_typeof(o) { "@babel/helpers - typeof"; return advancedLoan_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, advancedLoan_typeof(o); }
function advancedLoan_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, advancedLoan_toPropertyKey(descriptor.key), descriptor); } }
function advancedLoan_createClass(Constructor, protoProps, staticProps) { if (protoProps) advancedLoan_defineProperties(Constructor.prototype, protoProps); if (staticProps) advancedLoan_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function advancedLoan_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function advancedLoan_defineProperty(obj, key, value) { key = advancedLoan_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function advancedLoan_toPropertyKey(t) { var i = advancedLoan_toPrimitive(t, "string"); return "symbol" == advancedLoan_typeof(i) ? i : String(i); }
function advancedLoan_toPrimitive(t, r) { if ("object" != advancedLoan_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != advancedLoan_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Represents an advanced loan with properties and methods to manipulate and calculate loan data.
 */
var advancedLoan_AdvancedLoan = /*#__PURE__*/advancedLoan_createClass(
/**
 * Constructs a AdvancedLoan loanInstance with provided data or default values.
 * @param {Object} loanData - Data to initialize the loan properties.
 */
function AdvancedLoan() {
  var _this = this;
  var loanData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  advancedLoan_classCallCheck(this, AdvancedLoan);
  Object.keys(SimpleLoan.defaultAdvancedLoan).forEach(function (key) {
    _this["_".concat(key)] = loanData[key] || SimpleLoan.defaultAdvancedLoan[key];
  });
  // Additional initialization or validation logic can go here
});
/**
 * Default properties for an advanced loan.
 */
advancedLoan_defineProperty(advancedLoan_AdvancedLoan, "defaultAdvancedLoan", {
  id: null,
  // Auto increment (from db), no default in class, should be set externally
  uuid: uuidv4(),
  lender: "",
  lenderContact: "",
  lenderAddress: "",
  lenderContactPhone: "",
  lenderContactEmail: "",
  lenderContractRef: "",
  lenderContractDate: "",
  destination: "realEstate",
  active: false,
  calculationMode: "repayment",
  capital: 100000,
  beginDate: moment().add(1, "months").startOf("month").format("YYYY-MM-DDT12:00:00Z"),
  endDate: moment().add(121, "months").startOf("month").format("YYYY-MM-DDT12:00:00Z"),
  durationPeriods: 120,
  durationTime: 120,
  interestType: "simple",
  interestRate: 0.03,
  repaymentPeriodicity: "monthly",
  repayment: 1000
});
/* harmony default export */ const advancedLoan = ((/* unused pure expression or super */ null && (advancedLoan_AdvancedLoan)));
;// CONCATENATED MODULE: ./src/advanced/calcCapital.js
function calcCapital_calcCapital() {
  // Placeholder code
  return true;
}
/* harmony default export */ const advanced_calcCapital = (calcCapital_calcCapital);
;// CONCATENATED MODULE: ./src/advanced/calcInterestRate.js
function calcInterestRate_calcInterestRate() {
  // Placeholder code
  return true;
}
/* harmony default export */ const advanced_calcInterestRate = (calcInterestRate_calcInterestRate);
;// CONCATENATED MODULE: ./src/advanced/calcOverallInterestRate.js
function calcOverallInterestRate() {
  // Placeholder code
  return true;
}
/* harmony default export */ const advanced_calcOverallInterestRate = (calcOverallInterestRate);
;// CONCATENATED MODULE: ./src/advanced/calcRepayment.js
function calcRepayment_calcRepayment() {
  // Placeholder code
  return true;
}
/* harmony default export */ const advanced_calcRepayment = (calcRepayment_calcRepayment);
;// CONCATENATED MODULE: ./src/advanced/calcTotalFees.js
function calcTotalFees() {
  // Placeholder code
  return true;
}
/* harmony default export */ const advanced_calcTotalFees = (calcTotalFees);
;// CONCATENATED MODULE: ./src/advanced/calcTotalInsuranceCost.js
function calcTotalInsuranceCost() {
  // Placeholder code
  return true;
}
/* harmony default export */ const advanced_calcTotalInsuranceCost = (calcTotalInsuranceCost);
;// CONCATENATED MODULE: ./src/advanced/calcInsuranceCostAtPeriod.js
function calcInsuranceCostAtPeriod() {
  // Placeholder code
  return true;
}
/* harmony default export */ const advanced_calcInsuranceCostAtPeriod = (calcInsuranceCostAtPeriod);
;// CONCATENATED MODULE: ./src/advanced/calcTotalRepayments.js
function calcTotalRepayments_calcTotalRepayments() {
  // Placeholder code
  return true;
}
/* harmony default export */ const advanced_calcTotalRepayments = (calcTotalRepayments_calcTotalRepayments);
;// CONCATENATED MODULE: ./src/advanced/calcTotalInterests.js
function calcTotalInterests_calcTotalInterests() {
  // Placeholder code
  return true;
}
/* harmony default export */ const advanced_calcTotalInterests = (calcTotalInterests_calcTotalInterests);
;// CONCATENATED MODULE: ./src/advanced/calcRepaymentAtPeriod.js
function calcRepaymentAtPeriod_calcRepaymentAtPeriod() {
  // Placeholder code
  return true;
}
/* harmony default export */ const advanced_calcRepaymentAtPeriod = (calcRepaymentAtPeriod_calcRepaymentAtPeriod);
;// CONCATENATED MODULE: ./src/advanced/calcPrincipalAtPeriod.js
function calcPrincipalAtPeriod_calcPrincipalAtPeriod() {
  // Placeholder code
  return true;
}
/* harmony default export */ const advanced_calcPrincipalAtPeriod = (calcPrincipalAtPeriod_calcPrincipalAtPeriod);
;// CONCATENATED MODULE: ./src/advanced/calcInterestsAtPeriod.js
function calcInterestsAtPeriod_calcInterestsAtPeriod() {
  // Placeholder code
  return true;
}
/* harmony default export */ const advanced_calcInterestsAtPeriod = (calcInterestsAtPeriod_calcInterestsAtPeriod);
;// CONCATENATED MODULE: ./src/advanced/calcRemainingCapitalAtPeriod.js
function calcRemainingCapitalAtPeriod_calcRemainingCapitalAtPeriod() {
  // Placeholder code
  return true;
}
/* harmony default export */ const advanced_calcRemainingCapitalAtPeriod = (calcRemainingCapitalAtPeriod_calcRemainingCapitalAtPeriod);
;// CONCATENATED MODULE: ./src/advanced/calcRemainingInterestsAtPeriod.js
function calcRemainingInterestsAtPeriod() {
  // Placeholder code
  return true;
}
/* harmony default export */ const advanced_calcRemainingInterestsAtPeriod = (calcRemainingInterestsAtPeriod);
;// CONCATENATED MODULE: ./src/advanced/calcRemainingRepaymentsAmountAtPeriod.js
function calcRemainingRepaymentsAmountAtPeriod_calcRemainingRepaymentsAmountAtPeriod() {
  // Placeholder code
  return true;
}
/* harmony default export */ const advanced_calcRemainingRepaymentsAmountAtPeriod = (calcRemainingRepaymentsAmountAtPeriod_calcRemainingRepaymentsAmountAtPeriod);
;// CONCATENATED MODULE: ./src/advanced/calcRemainingRepaymentsNumberAtPeriod.js
function calcRemainingRepaymentsNumberAtPeriod_calcRemainingRepaymentsNumberAtPeriod() {
  // Placeholder code
  return true;
}
/* harmony default export */ const advanced_calcRemainingRepaymentsNumberAtPeriod = (calcRemainingRepaymentsNumberAtPeriod_calcRemainingRepaymentsNumberAtPeriod);
;// CONCATENATED MODULE: ./src/advanced/calcEarlyRepaymentCostAtPeriod.js
function calcEarlyRepaymentCostAtPeriod() {
  // Placeholder code
  return true;
}
/* harmony default export */ const advanced_calcEarlyRepaymentCostAtPeriod = (calcEarlyRepaymentCostAtPeriod);
;// CONCATENATED MODULE: ./src/advanced/calcEarlyRepaymentAmountAtPeriod.js
function calcEarlyRepaymentAmountAtPeriod() {
  // Placeholder code
  return true;
}
/* harmony default export */ const advanced_calcEarlyRepaymentAmountAtPeriod = (calcEarlyRepaymentAmountAtPeriod);
;// CONCATENATED MODULE: ./src/advanced/index.js
// src/advanced/index.js

// Import each function from its file



















// Optionally, provide named exports for individual imports


// Export all functions under the "advanced" namespace
var advanced = {
  calcCapital: advanced_calcCapital,
  calcInterestRate: advanced_calcInterestRate,
  calcOverallInterestRate: advanced_calcOverallInterestRate,
  calcRepayment: advanced_calcRepayment,
  calcTotalFees: advanced_calcTotalFees,
  calcTotalInsuranceCost: advanced_calcTotalInsuranceCost,
  calcInsuranceCostAtPeriod: advanced_calcInsuranceCostAtPeriod,
  calcTotalRepayments: advanced_calcTotalRepayments,
  calcTotalInterests: advanced_calcTotalInterests,
  calcRepaymentAtPeriod: advanced_calcRepaymentAtPeriod,
  calcPrincipalAtPeriod: advanced_calcPrincipalAtPeriod,
  calcInterestsAtPeriod: advanced_calcInterestsAtPeriod,
  calcRemainingCapitalAtPeriod: advanced_calcRemainingCapitalAtPeriod,
  calcRemainingInterestsAtPeriod: advanced_calcRemainingInterestsAtPeriod,
  calcRemainingRepaymentsAmountAtPeriod: advanced_calcRemainingRepaymentsAmountAtPeriod,
  calcRemainingRepaymentsNumberAtPeriod: advanced_calcRemainingRepaymentsNumberAtPeriod,
  calcEarlyRepaymentCostAtPeriod: advanced_calcEarlyRepaymentCostAtPeriod,
  calcEarlyRepaymentAmountAtPeriod: advanced_calcEarlyRepaymentAmountAtPeriod
};

// Using ES6 default export for the advanced namespace
/* harmony default export */ const src_advanced = ((/* unused pure expression or super */ null && (advanced)));
;// CONCATENATED MODULE: ./src/advancedLoan/index.js
// src/advancedLoan/index.js

// Import the AdvancedLoan class


// Import common functions


// Import advanced functions


// Re-export common and advanced functions for external use


// Export AdvancedLoan class as the default export
/* harmony default export */ const src_advancedLoan = ((/* unused pure expression or super */ null && (AdvancedLoan)));
;// CONCATENATED MODULE: ./src/index.js
// src/index-full.js

// Importing namespaces and classes from simpleLoan and advancedLoan modules




// Exporting all the imported modules, classes, and namespaces for external use

/******/ })()
;
//# sourceMappingURL=powerloan-prod.js.map
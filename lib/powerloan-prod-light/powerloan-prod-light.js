/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

// UNUSED EXPORTS: common, simple, simpleLoan

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
;// CONCATENATED MODULE: ./src/index-light.js
// src/index-light.js

// Importing namespaces and classes from simpleLoan module



// Exporting all the imported modules, classes, and namespaces for external use

/******/ })()
;
//# sourceMappingURL=powerloan-prod-light.js.map
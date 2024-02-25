import { v4 as uuidv4 } from 'uuid'; // For generating UUIDs
import dayjs from 'dayjs'; // For date manipulation
import validation from '../helpers/validation';
import EventEmitter from '../helpers/eventEmitter.js';

/**
 * Represents a Simple Loan.
 * Extends EventEmitter to emit events.
 * @class
 * @constructor
 * @property {integer} id loan id. Auto increment (from db)
 * @property {string} uuid unique identifier of user/device. Generated with uuid JS library. Default : ""
 * @property {string} title title of the loan. Default : "My Simple Loan"
 * @property {string} description description of the loan. Default : ""
 * @property {string} destination loan's destination : "realEstate", "car", "consumer", "student", "business" or "other". Default : "realEstate"
 * @property {string} destinationOther custom loan's destination when destination is "other". Default : ""
 * @property {boolean} active Real contracted loan or simulation. True if the loan is a real contracted loan. False if the loan is only a simulation. Default : false
 * @property {string} calculationMode Define the result we want to get : "capital", "duration", "interest", "repayment". Default : "repayment"
 * @property {integer} capital borrowed capital ($). Default : 100000
 * @property {date} releaseDate date of capital release. Default : 1rst of next month from today at 08:00:00
 * @property {date} beginDate date of loan beginning (first repayment). Default : releaseDate + one month
 * @property {date} endDate date of loan ending (last repayment). Default : beginDate + (durationTime - 1) (in months)
 * @property {integer} durationPeriods number of period of repayment. Default : 120
 * @property {integer} durationTime duration of loan in months. Default : 120
 * @property {decimal} interestRate raw annual interest rate. Default: 0.0350
 * @property {decimal} repayment periodic repayment ($) (only if constant repayment. If variable repayment, it must be calculated for each period.). Default : 1000
 * @property {string} lender lender name. Default : ""
 * @property {string} lenderContact lender's contact name. Default : ""
 * @property {string} lenderAddress lender's address. Default : ""
 * @property {string} lenderContactPhone lender's contact phone number. Default : ""
 * @property {string} lenderContactEmail lender's contact email. Default : ""
 * @property {string} lenderContractRef reference of the loan contract. Default : ""
 * @property {date} lenderContractDate date of loan contract. Default : null
 * @property {date} createdAt date of loan creation. Default : Now
 * @property {date} modifiedAt date of last loan modification. Default : Now
 * @public
 */
class SimpleLoan extends EventEmitter {

  /**
   * Default values for a simple loan.
   */
  static defaultSimpleLoan = {
    id: null, // Auto-incremented from DB
    uuid: uuidv4(),
    title: "My Simple Loan",
    description: "My Simple Loan",
    destination: "realEstate",
    destinationOther: "",
    active: false,
    calculationMode: "repayment",
    capital: 100000,
    releaseDate: dayjs().add(1, 'month').format('YYYY-MM-01T08:00:00Z'), // 1st of next month
    beginDate: dayjs().add(2, 'month').format('YYYY-MM-01T08:00:00Z'), // 1st of 1 month after next month
    endDate: dayjs().add(121, 'month').format('YYYY-MM-01T08:00:00Z'), // beginDate + 120 months
    durationPeriods: 120,
    durationTime: 120,
    interestRate: 0.035,
    repayment: 1000,
    lender: "",
    lenderContact: "",
    lenderAddress: "",
    lenderContactPhone: "",
    lenderContactEmail: "",
    lenderContractRef: "",
    lenderContractDate: null,
    createdAt: dayjs().format('YYYY-MM-DDTHH:mm:ssZ'),
    modifiedAt: dayjs().format('YYYY-MM-DDTHH:mm:ssZ')
  };

  /**
   * Constructs a new SimpleLoan instance.
   * @param {Object} loanData - The loanData JS object to initialize the loan with.
   */
  constructor(loanData = {}) {

    // Initialize the EventEmitter
    super();

    // Initialize properties from loanData or default values
    Object.keys(SimpleLoan.defaultSimpleLoan).forEach(key => {
      this[`_${key}`] = loanData[key] || SimpleLoan.defaultSimpleLoan[key];
    });
    
  }

  /** 
   * ==========================================================================
   *  PROPERTIES GETTERS & SETTERS
   * ==========================================================================
   */
  
  // ID Getter and Setter
  /**
   * Gets the loan ID.
   * @returns {number} The ID of the loan.
   */
  get id() {
    return this._id;
  }

  /**
   * Sets the loan ID.
   * @param {number} value - The new ID of the loan.
   */
  set id(value) {
    this._validateAndSetProperty('id', value);
  }

  // UUID Getter and Setter
  /**
   * Gets the loan UUID.
   * @returns {string} The UUID of the loan.
   */
  get uuid() {
    return this._uuid;
  }

  /**
   * Sets the loan UUID.
   * @param {string} value - The new UUID of the loan.
   */
  set uuid(value) {
    this._validateAndSetProperty('uuid', value);
  }

  // Title Getter and Setter
  /**
   * Gets the loan title.
   * @returns {string} The title of the loan.
   */
  get title() {
    return this._title;
  }

  /**
   * Sets the loan title.
   * @param {string} value - The new title of the loan.
   */
  set title(value) {
    this._validateAndSetProperty('title', value);
  }

  // Description Getter and Setter
  /**
   * Gets the loan description.
   * @returns {string} The description of the loan.
   */
  get description() {
    return this._description;
  }

  /**
   * Sets the loan description.
   * @param {string} value - The new description of the loan.
   */
  set description(value) {
    this._validateAndSetProperty('description', value);
  }

  // Destination Getter and Setter
  /**
   * Gets the loan's destination.
   * @returns {string} The destination of the loan.
   */
  get destination() {
    return this._destination;
  }

  /**
   * Sets the loan's destination.
   * @param {string} value - The new destination of the loan.
   */
  set destination(value) {
    this._validateAndSetProperty('destination', value);
  }

  // DestinationOther Getter and Setter
  /**
   * Gets the loan's other destination description.
   * @returns {string} The custom destination of the loan when 'other' is selected.
   */
  get destinationOther() {
    return this._destinationOther;
  }

  /**
   * Sets the loan's other destination description.
   * @param {string} value - The new custom destination of the loan when 'other' is selected.
   */
  set destinationOther(value) {
    this._validateAndSetProperty('destinationOther', value);
  }

  // Active Getter and Setter
  /**
   * Gets the loan's active status.
   * @returns {boolean} True if the loan is active, false otherwise.
   */
  get active() {
    return this._active;
  }

  /**
   * Sets the loan's active status.
   * @param {boolean} value - The new active status of the loan.
   */
  set active(value) {
    this._validateAndSetProperty('active', value);
  }

  // CalculationMode Getter and Setter
  /**
   * Gets the loan's calculation mode.
   * @returns {string} The calculation mode of the loan.
   */
  get calculationMode() {
    return this._calculationMode;
  }

  /**
   * Sets the loan's calculation mode.
   * @param {string} value - The new calculation mode of the loan.
   */
  set calculationMode(value) {
    this._validateAndSetProperty('calculationMode', value);
    this.calculateLoan();
  }

  // Capital Getter and Setter
  /**
   * Gets the loan's capital.
   * @returns {number} The capital of the loan.
   */
  get capital() {
    return this._capital;
  }

  /**
   * Sets the loan's capital.
   * @param {number} value - The new capital of the loan.
   */
  set capital(value) {
    this._validateAndSetProperty('capital', value);
    this.calculateLoan();
  }

  // ReleaseDate Getter and Setter
  /**
   * Gets the loan's release date.
   * @returns {string} The release date of the loan in ISO 8601 format.
   */
  get releaseDate() {
    return this._releaseDate;
  }

  /**
   * Sets the loan's release date.
   * @param {string} value - The new release date of the loan in ISO 8601 format.
   */
  set releaseDate(value) {
    this._validateAndSetProperty('releaseDate', value);
    this._adjustBeginDate();
  }

  // BeginDate Getter and Setter
  /**
   * Gets the loan's begin date.
   * @returns {string} The begin date of the loan in ISO 8601 format.
   */
  get beginDate() {
    return this._beginDate;
  }

  /**
   * Sets the loan's begin date.
   * @param {string} value - The new begin date of the loan in ISO 8601 format.
   */
  set beginDate(value) {
    this._validateAndSetProperty('beginDate', value);
    this._adjustReleaseDate();
    this._adjustEndDate();
    this.calculateLoan();
  }

  // EndDate Getter and Setter
  /**
   * Gets the loan's end date.
   * @returns {string} The end date of the loan in ISO 8601 format.
   */
  get endDate() {
    return this._endDate;
  }

  /**
   * Sets the loan's end date.
   * @param {string} value - The new end date of the loan in ISO 8601 format.
   */
  set endDate(value) {
    this._validateAndSetProperty('endDate', value);
    this._adjustDurationPeriods();
    this.calculateLoan();
  }

  // DurationPeriods Getter and Setter
  /**
   * Gets the loan's duration in periods.
   * @returns {number} The number of repayment periods for the loan.
   */
  get durationPeriods() {
    return this._durationPeriods;
  }

  /**
   * Sets the loan's duration in periods.
   * @param {number} value - The new number of repayment periods for the loan.
   */
  set durationPeriods(value) {
    this._validateAndSetProperty('durationPeriods', value);
    this._adjustEndDate();
    this.calculateLoan();
  }

  // DurationTime Getter and Setter
  /**
   * Gets the loan's duration in time (months).
   * @returns {number} The duration of the loan in months.
   */
  get durationTime() {
    return this._durationTime;
  }

  /**
   * Sets the loan's duration in time (months).
   * @param {number} value - The new duration of the loan in months.
   */
  set durationTime(value) {
    this._validateAndSetProperty('durationTime', value);
    this._adjustEndDate();
    this._adjustDurationPeriods();
    this.calculateLoan();
  }

  // InterestRate Getter and Setter
  /**
   * Gets the loan's interest rate.
   * @returns {number} The interest rate of the loan.
   */
  get interestRate() {
    return this._interestRate;
  }

  /**
   * Sets the loan's interest rate.
   * @param {number} value - The new interest rate of the loan.
   */
  set interestRate(value) {
    this._validateAndSetProperty('interestRate', value);
    this.calculateLoan();
  }

  // Repayment Getter and Setter
  /**
   * Gets the loan's periodic repayment amount.
   * @returns {number} The periodic repayment amount of the loan.
   */
  get repayment() {
    return this._repayment;
  }

  /**
   * Sets the loan's periodic repayment amount.
   * @param {number} value - The new periodic repayment amount of the loan.
   */
  set repayment(value) {
    this._validateAndSetProperty('repayment', value);
    this.calculateLoan();
  }

  // Lender Getter and Setter
  /**
   * Gets the loan's lender name.
   * @returns {string} The name of the lender.
   */
  get lender() {
    return this._lender;
  }

  /**
   * Sets the loan's lender name.
   * @param {string} value - The new name of the lender.
   */
  set lender(value) {
    this._validateAndSetProperty('lender', value);
  }

  // LenderContact Getter and Setter
  /**
   * Gets the contact name for the loan's lender.
   * @returns {string} The contact name of the lender.
   */
  get lenderContact() {
    return this._lenderContact;
  }

  /**
   * Sets the contact name for the loan's lender.
   * @param {string} value - The new contact name of the lender.
   */
  set lenderContact(value) {
    this._validateAndSetProperty('lenderContact', value);
  }

  // LenderAddress Getter and Setter
  /**
   * Gets the address of the loan's lender.
   * @returns {string} The address of the lender.
   */
  get lenderAddress() {
    return this._lenderAddress;
  }

  /**
   * Sets the address of the loan's lender.
   * @param {string} value - The new address of the lender.
   */
  set lenderAddress(value) {
    this._validateAndSetProperty('lenderAddress', value);
  }

  // LenderContactPhone Getter and Setter
  /**
   * Gets the contact phone number for the loan's lender.
   * @returns {string} The contact phone number of the lender.
   */
  get lenderContactPhone() {
    return this._lenderContactPhone;
  }

  /**
   * Sets the contact phone number for the loan's lender.
   * @param {string} value - The new contact phone number of the lender.
   */
  set lenderContactPhone(value) {
    this._validateAndSetProperty('lenderContactPhone', value);
  }

  // LenderContactEmail Getter and Setter
  /**
   * Gets the contact email for the loan's lender.
   * @returns {string} The contact email of the lender.
   */
  get lenderContactEmail() {
    return this._lenderContactEmail;
  }

  /**
   * Sets the contact email for the loan's lender.
   * @param {string} value - The new contact email of the lender.
   */
  set lenderContactEmail(value) {
    this._validateAndSetProperty('lenderContactEmail', value);
  }

  // LenderContractRef Getter and Setter
  /**
   * Gets the loan contract reference number.
   * @returns {string} The contract reference number.
   */
  get lenderContractRef() {
    return this._lenderContractRef;
  }

  /**
   * Sets the loan contract reference number.
   * @param {string} value - The new contract reference number.
   */
  set lenderContractRef(value) {
    this._validateAndSetProperty('lenderContractRef', value);
  }

  // LenderContractDate Getter and Setter
  /**
   * Gets the date of the loan contract.
   * @returns {string} The date of the loan contract in ISO 8601 format.
   */
  get lenderContractDate() {
    return this._lenderContractDate;
  }

  /**
   * Sets the date of the loan contract.
   * @param {string} value - The new date of the loan contract in ISO 8601 format.
   */
  set lenderContractDate(value) {
    this._validateAndSetProperty('lenderContractDate', value);
  }

  // CreatedAt Getter and Setter
  /**
   * Gets the creation date of the loan.
   * @returns {string} The creation date of the loan in ISO 8601 format.
   */
  get createdAt() {
    return this._createdAt;
  }

  /**
   * Sets the creation date of the loan.
   * @param {string} value - The new creation date of the loan in ISO 8601 format.
   */
  set createdAt(value) {
    this._validateAndSetProperty('createdAt', value);
  }

  // ModifiedAt Getter and Setter
  /**
   * Gets the last modification date of the loan.
   * @returns {string} The last modification date of the loan in ISO 8601 format.
   */
  get modifiedAt() {
    return this._modifiedAt;
  }

  /**
   * Sets the last modification date of the loan.
   * @param {string} value - The new last modification date of the loan in ISO 8601 format.
   */
  set modifiedAt(value) {
    this._validateAndSetProperty('modifiedAt', value);
  }

  /** 
   * ==========================================================================
   *  PUBLIC METHODS
   * ==========================================================================
   */

  /**
   * Calculate loan according to [calculationMode] and update the target loan's property of calculation.
   * @method
   */
  calculateLoan() {
    switch(this._calculationMode) {
      case "capital":
        this._capital = calcCapital();
        break;
      case "duration":
        this._durationPeriods = calcDurationPeriods();
        this._durationTime = this._durationPeriods;
        break;
      case "interest":
        this._interestRate = calcInterestRate();
        break;
      case "repayment":
      default:
        this._repayment = calcRepayment();
        break;
    }
    this.emit('calculated', { calculationMode: this._calculationMode }); // Emit a [calculated] event
  }

  /**
   * Validates all properties and aggregates errors.
   * @param {Object} loanData - The loan data to validate.
   * @returns {Object} An object containing a valid flag and a list of errors.
   * @method
   */
  validateLoanData(loanData) {
    const errors = [];

    // Iterate over each property to validate
    Object.keys(SimpleLoan.defaultSimpleLoan).forEach((key) => {
      const validationResult = this._validateProperty(key, loanData[key]);
      if (validationResult !== true) {
        // Collect errors instead of throwing them
        errors.push(validationResult);
      }
    });

    return {
      isValid: errors.length === 0,
      errors: errors,
    };
  }

  /**
   * Validates and sets the property values of the loan.
   * If validation fails for any property, it aggregates errors.
   * @param {Object} loanData - The loan data to initialize or update the loan with.
   * @method
   */
  setLoanData(loanData) {
    const validation = this.validateLoanData(loanData);

    if (!validation.isValid) {
      // Handle or throw aggregated errors
      // For example, you could throw a single error with a joined message:
      const errorMessage = validation.errors.map(err => `${err.propertyName}: ${err.message}`).join('\n');
      throw new Error(`Loan data validation failed:\n${errorMessage}`);
    }

    // If validation passed for all, set the property values
    Object.keys(loanData).forEach(key => {
      this[`_${key}`] = loanData[key];
    });
  }

  /**
   * Calculates the loan's capital.
   * @returns {number} The loan's borrowed capital.
   * @method
   */
  calcCapital() {
    // Placeholder implementation
  }

  /**
   * Calculates the loan's duration in periods.
   * @returns {number} The loan's duration in periods.
   * @method
   */
  calcDurationPeriods() {
    // Placeholder implementation
  }

  /**
   * Calculates the loan's interest rate.
   * @returns {number} The loan's interest rate.
   * @method
   */
  calcInterestRate() {
    // Placeholder implementation
  }

  /**
   * Calculates the loan's periodic repayment amount.
   * @returns {number} The periodic repayment amount of the loan.
   * @method
   */
  calcRepayment() {
    // Placeholder implementation
  }

  /**
   * Calculates the loan's total repayments amount.
   * @returns {number} The total repayments amount of the loan.
   * @method
   */
  calcTotalRepayments() {
    // Placeholder implementation
  }

  /**
   * Calculates the loan's total interests amount.
   * @returns {number} The total interests amount of the loan.
   * @method
   */
  calcTotalInterests() {
    // Placeholder implementation
  }

  /**
   * Calculates the loan's repayment amount at one specific period.
   * @returns {number} The repayment amount at one specific period of the loan.
   * @method
   */
  calcRepaymentAtPeriod() {
    // Placeholder implementation
  }

  /**
   * Calculates the loan's principal amount at one specific period.
   * @returns {number} The principal amount at one specific period of the loan.
   * @method
   */
  calcPrincipalAtPeriod() {
    // Placeholder implementation
  }

  /**
   * Calculates the loan's interests amount at one specific period.
   * @returns {number} The interests amount at one specific period of the loan.
   * @method
   */
  calcInterestsAtPeriod() {
    // Placeholder implementation
  }

  /**
   * Calculates the loan's remaining capital amount at one specific period.
   * @returns {number} The remaining capital amount at one specific period of the loan.
   * @method
   */
  calcRemainingCapitalAtPeriod() {
    // Placeholder implementation
  }

  /**
   * Calculates the loan's total remaining repayment amount.
   * @returns {number} The total remaining repayment amount of the loan.
   * @method
   */
  calcRemainingRepaymentsAmountAtPeriod() {
    // Placeholder implementation
  }

  /**
   * Calculates the loan's total remaining repayment number.
   * @returns {number} The total remaining repayment number of the loan.
   * @method
   */
  calcRemainingRepaymentsNumberAtPeriod() {
    // Placeholder implementation
  }

  /**
   * Serialize a [SimpleLoan] instance into a JSON object (for DB storage)
   * @returns {number} A JSON object (for DB storage), serialization of the [SimpleLoan] instance.
   * @method
   */
  toJSON() {
    // Placeholder implementation
  }

  /**
   * Deserialize a JSON object (from DB storage) into a [SimpleLoan] instance.
   * @returns {number} A [SimpleLoan] instance, deserialization of a JSON object (from DB storage).
   * @method
   */
  fromJSON() {
    // Placeholder implementation
  }

  
  /** 
   * ==========================================================================
   *  EVENTS
   * ==========================================================================
   */
  
  /**
   * @event SimpleLoan#propertyChanged
   * @type {object}
   * @property {string} propertyName - The name of the property that changed.
   * @property {*} oldValue - The previous value of the property, before change.
   * @property {*} propertyValue - The new value of the property, after change.
   */


  /** 
   * ==========================================================================
   *  PRIVATE METHODS
   * ==========================================================================
   */
  
  /**
   * Adjust [releaseDate] of the loan's.
   * @method
   * @private
   */
  _adjustReleaseDate() {
    this._releaseDate = dayjs(this._beginDate).subtract(1, "months").format('YYYY-MM-01T08:00:00Z');
  }

  /**
   * Adjust [beginDate] of the loan's.
   * @method
   * @private
   */
  _adjustBeginDate() {
    this._beginDate = dayjs(this._releaseDate).add(1, "months").format('YYYY-MM-01T08:00:00Z');
    this._adjustEndDate();
  }

  /**
   * Adjust [endDate] of the loan's.
   * @method
   * @private
   */
  _adjustEndDate() {
    this._endDate = dayjs(this._beginDate).add(this._durationPeriods, "months").format('YYYY-MM-01T08:00:00Z');
  }

  /**
   * Adjust [durationPeriods] of the loan's.
   * @method
   * @private
   */
  _adjustDurationPeriods() {
    this._durationPeriods = dayjs(this._endDate).diff(this._beginDate, "month");
    this._durationTime = this._durationPeriods;
  }

  /**
   * Validates and sets the property value if valid, otherwise throws an error.
   * @param {string} propertyName - The name of the property to validate and set.
   * @param {*} value - The value to set for the property.
   * @fires SimpleLoan#propertyChanged - Fires the [propertyChanged] event if property value changed
   * @method
   * @private
   */
  _validateAndSetProperty(propertyName, propertyValue) {
    const validationResult = this._validateProperty(propertyName, propertyValue);
    if (validationResult === true) {
      // Check if the new value is different from the current value
      // If true, update the property and raise event
      const oldValue = this[`_${propertyName}`];
      if (oldValue !== propertyValue) {
        this[`_${propertyName}`] = propertyValue; // Update the property value
        this.emit('propertyChanged', { propertyName, oldValue, propertyValue }); // Emit a [propertyChanged] event
      }
    } else {
      throw new Error(`Invalid property [${validationResult.propertyName}] value [${validationResult.propertyValue}]:\n${validationResult.message}`);
    }
  }

  /**
   * Validates a property's value.
   * @param {string} propertyName - The name of the property to validate.
   * @param {*} value - The value of the property to validate.
   * @returns {Object|null} An error object if validation fails, or null if validation succeeds.
   * @method
   * @private
   */
  _validateProperty(propertyName, propertyValue) {
    let isValid = true;
    let message = '';
    let options = null;

    switch (propertyName) {

      case 'id':
        if (!validation.isInteger(propertyValue) || propertyValue < 1) {
          isValid = false;
          message = `[${propertyName}] (${propertyValue}) must be a positive integer >= 1.`;
        }
        break;
        
      case 'uuid':
        if (!validation.isUUID(propertyValue)) {
          isValid = false;
          message = `[${propertyName}] (${propertyValue}) is not valid UUID.`;
        }
        break;

      case 'title':
        if (!validation.isString(propertyValue) || !propertyValue.trim()) {
          isValid = false;
          message = `[${propertyName}] (${propertyValue}) must be a non-empty string.`;
        }
        break;
      case 'description':
        break;

      case 'destination':
        options = ["realEstate", "car", "consumer", "student", "business", "other"];
        if (!options.includes(propertyValue)) {
          isValid = false;
          message = `[${propertyName}] (${propertyValue}) must be a non empty string, either "realEstate", "car", "consumer", "student", "business" or "other".`;
        }
        break;
      case 'destinationOther':
        break;

      case 'active':
        if (!validation.isBoolean(propertyValue)) {
          isValid = false;
          message = `[${propertyName}] (${propertyValue}) must be a boolean.`;
        }
        break;

      case 'calculationMode':
        options = ["capital", "duration", "interest", "repayment"];
        if (!options.includes(propertyValue)) {
          isValid = false;
          message = `[${propertyName}] (${propertyValue}) must be a non empty string, either "capital", "duration", "interest" or "repayment".`;
        }
        break;

      case 'capital':
        if (!validation.isInteger(propertyValue) || propertyValue < 100 || propertyValue > 1000000000) {
          isValid = false;
          message = `[${propertyName}] (${propertyValue}) must be a positive integer between 100 and 1,000,000,000.`;
        }
        break;

      case 'releaseDate':
        if ( !validation.isDate(propertyValue) || !dayjs(propertyValue).isValid()
             || dayjs(propertyValue).isBefore(dayjs('1900-01-01'))
             || dayjs(propertyValue).isAfter(dayjs('2100-12-12'))
            ) {
          isValid = false;
          message = `[${propertyName}] (${propertyValue}) must be a valid ISO 8601 date string between [1900-01-01] and [2100-12-12].`;
        }
        if ( dayjs(propertyValue).isAfter(dayjs(this.beginDate)) ) {
          isValid = false;
          message = `[${propertyName}] (${propertyValue}) must be before [beginDate].`;
        }
        break;
      case 'beginDate':
        if ( !validation.isDate(propertyValue) || !dayjs(propertyValue).isValid()
             || dayjs(propertyValue).isBefore(dayjs('1900-01-01').add(1, 'month'))
             || dayjs(propertyValue).isAfter(dayjs('2100-12-12'))
           ) {
          isValid = false;
          message = `[${propertyName}] (${propertyValue}) must be a valid ISO 8601 date string between [1900-01-01] and [2100-12-12].`;
        }
        if ( dayjs(propertyValue).isBefore(dayjs(this.releaseDate)) 
             || dayjs(propertyValue).isAfter(dayjs(this.endDate))
           ) {
          isValid = false;
          message = `[${propertyName}] (${propertyValue}) must be after [releaseDate] (${dayjs(this.releaseDate)}) and before [endDate] (${dayjs(this.endDate)}).`;
        }
        break;
      case 'endDate':
        if ( !validation.isDate(propertyValue) || !dayjs(propertyValue).isValid()
             || dayjs(propertyValue).isBefore(dayjs('1900-01-01'))
             || dayjs(propertyValue).isAfter(dayjs('2100-12-12'))
           ) {
          isValid = false;
          message = `[${propertyName}] (${propertyValue}) must be a valid ISO 8601 date string between [1900-01-01] and [2100-12-12].`;
        }
        if ( dayjs(propertyValue).isBefore(dayjs(this.beginDate)) ) {
          isValid = false;
          message = `[${propertyName}] (${propertyValue}) (${propertyValue}) must be after [beginDate] (${dayjs(this.beginDate)}).`;
        }
        break;

      case 'durationPeriods':
        if (!validation.isInteger(propertyValue) || propertyValue < 1 || propertyValue > 2400) {
          isValid = false;
          message = `[${propertyName}] (${propertyValue}) must be a positive integer between 1 and 2400 months.`;
        }
        break;
      case 'durationTime':
        if (!validation.isInteger(propertyValue) || propertyValue < 1 || propertyValue > 2400) {
          isValid = false;
          message = `[${propertyName}] (${propertyValue}) must be a positive integer between 1 and 2400 months.`;
        }
        break;

      case 'interestRate':
        if (!validation.isNumber(propertyValue) || propertyValue < 0 || propertyValue > 1) {
          isValid = false;
          message = `[${propertyName}] (${propertyValue}) must be a positive decimal number between 0 and 1.`;
        }
        break;

      case 'repayment':
        if (!validation.isNumber(propertyValue) || propertyValue < 1 || propertyValue > this._capital) {
          isValid = false;
          message = `[${propertyName}] (${propertyValue}) must be a positive decimal number between 1 and [capital] (${this._capital}).`;
        }
        break;
        
      case 'lender':
      case 'lenderContact':
      case 'lenderAddress':
      case 'lenderContactPhone':
      case 'lenderContactEmail':
      case 'lenderContractRef':
      case 'lenderContractDate':
        break;

      case 'createdAt':
      case 'modifiedAt':
        if (!validation.isDate(propertyValue) || !dayjs(propertyValue).isValid()) {
          isValid = false;
          message = `[${propertyName}] (${propertyValue}) must be a valid ISO 8601 date string.`;
        }
        break;

      default:
        isValid = false;
        message = `Validation for [${propertyName}] is not implemented.`;
    }

    return isValid 
           ? true 
           : { 
                propertyName : propertyName, 
                propertyValue : propertyValue, 
                message : message 
             };
  }

}

export default SimpleLoan;

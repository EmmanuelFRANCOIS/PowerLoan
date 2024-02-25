/**
 * A namespace for validation functions.
 * @namespace validation
 * @private
 */
const validation = {
  /**
   * Checks if a value is a number.
   * @param {*} value - The value to check.
   * @returns {boolean} True if the value is a number, false otherwise.
   * @private
   */
  isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
  },

  /**
   * Checks if a value is an integer.
   * @param {*} value - The value to check.
   * @returns {boolean} True if the value is an integer, false otherwise.
   * @private
   */
  isInteger(value) {
    return Number.isInteger(value);
  },

  /**
   * Checks if a value is a string.
   * @param {*} value - The value to check.
   * @returns {boolean} True if the value is a string, false otherwise.
   * @private
   */
  isString(value) {
    return typeof value === 'string';
  },

  /**
   * Checks if a value is a boolean.
   * @param {*} value - The value to check.
   * @returns {boolean} True if the value is a boolean, false otherwise.
   * @private
   */
  isBoolean(value) {
    return typeof value === 'boolean';
  },

  /**
   * Checks if a value is a Date object.
   * @param {*} value - The value to check.
   * @returns {boolean} True if the value is a Date object, false otherwise.
   * @private
   */
  isDate(value) {
    const date = new Date(value);
    return !isNaN(date.getTime());
  },

  /**
   * Checks if a value is an object (excluding arrays and null).
   * @param {*} value - The value to check.
   * @returns {boolean} True if the value is an object, false otherwise.
   * @private
   */
  isObject(value) {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
  },

  /**
   * Checks if a value is an array.
   * @param {*} value - The value to check.
   * @returns {boolean} True if the value is an array, false otherwise.
   * @private
   */
  isArray(value) {
    return Array.isArray(value);
  },

  /**
   * Checks if a value is a valid email address (RFC 5322 official standard regex).
   * @param {*} value - The value to check.
   * @returns {boolean} True if the value is a valid email address, false otherwise.
   * @private
   */
  isEmail(value) {
    //const regex = /^\S+@\S+\.\S+$/;
    const regex = /^([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|\[[\t -Z^-~]*])$/;
    return validation.isString(value) && regex.test(value);
  },

  /**
   * Checks if a value is a valid UUID.
   * @param {*} value - The value to check.
   * @returns {boolean} True if the value is a valid UUID, false otherwise.
   * @private
   */
  isUUID(value) {
    const regex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
    return validation.isString(value) && regex.test(value);
  },

  /**
   * Checks if a value is a valid Url.
   * @param {*} value - The value to check.
   * @returns {boolean} True if the value is a valid Url, false otherwise.
   * @private
   */
  isUrl(value) {
    const regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    return validation.isString(value) && regex.test(value);
  },

  /**
   * Checks if a value is a valid phone number. Note: This is a basic validation and might need to be localized.
   * @param {*} value - The value to check.
   * @returns {boolean} True if the value is a valid phone number, false otherwise.
   * @private
   */
  isPhone(value) {
    const regex = /^\+?[0-9]{7,}$/; // Very basic validation, consider more specific regex for actual use
    return validation.isString(value) && regex.test(value);
  }
};

export default validation;

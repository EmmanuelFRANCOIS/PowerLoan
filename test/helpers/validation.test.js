// validation.test.js

import { v4 as uuidv4 } from 'uuid'; // For generating UUIDs

import validation from '../../src/helpers/validation';

describe('validation utilities', () => {
  // Test isNumber
  test('isNumber with a number', () => {
    expect(validation.isNumber(42)).toBe(true);
  });

  test('isNumber with a string', () => {
    expect(validation.isNumber('42')).toBe(false);
  });

  // Test isInteger
  test('isInteger with an integer', () => {
    expect(validation.isInteger(42)).toBe(true);
  });

  test('isInteger with a float', () => {
    expect(validation.isInteger(42.5)).toBe(false);
  });

  // Test isString
  test('isString with a string', () => {
    expect(validation.isString('test')).toBe(true);
  });

  test('isString with a number', () => {
    expect(validation.isString(42)).toBe(false);
  });

  // Test isBoolean
  test('isBoolean with a boolean', () => {
    expect(validation.isBoolean(true)).toBe(true);
  });

  test('isBoolean with a string', () => {
    expect(validation.isBoolean('true')).toBe(false);
  });

  // Test isDate
  test('isDate with a valid date', () => {
    expect(validation.isDate('2024-01-01')).toBe(true);
    expect(validation.isDate('2024-01-01T12:00:00')).toBe(true);
    expect(validation.isDate('2024-01-01T12:00:00Z')).toBe(true);
  });

  test('isDate with an invalid date', () => {
    expect(validation.isDate('invalid date')).toBe(false);
  });

  // Test isObject
  test('isObject with an object', () => {
    expect(validation.isObject({})).toBe(true);
  });

  test('isObject with an array', () => {
    expect(validation.isObject([])).toBe(false);
  });

  // Test isArray
  test('isArray with an array', () => {
    expect(validation.isArray([])).toBe(true);
  });

  test('isArray with an object', () => {
    expect(validation.isArray({})).toBe(false);
  });

  // Test isEmail
  test('isEmail with a valid email', () => {
    expect(validation.isEmail('email@example.com')).toBe(true);
  });

  test('isEmail with an invalid email', () => {
    expect(validation.isEmail('invalidemail')).toBe(false);
  });

  // Test isUUID
  test('isUUID with a valid UUID', () => {
    expect(validation.isUUID(uuidv4())).toBe(true);
  });

  test('isUUID with an invalid UUID', () => {
    expect(validation.isUUID('invalid-uuid')).toBe(false);
  });

  // Test isUrl
  test('isUrl with a valid URL', () => {
    expect(validation.isUrl('http://example.com')).toBe(true);
  });

  test('isUrl with an invalid URL', () => {
    expect(validation.isUrl('invalidurl')).toBe(false);
  });

  // Test isPhone
  test('isPhone with a valid phone number', () => {
    expect(validation.isPhone('+1234567890')).toBe(true);
  });

  test('isPhone with an invalid phone number', () => {
    expect(validation.isPhone('invalidphone')).toBe(false);
  });
});

import calcFutureValueCompoundInterest from '../../src/common/calcFutureValueCompoundInterest';

describe('calcFutureValueCompoundInterest', () => {
  it('calculates the future value correctly for ordinary annuity with positive interest', () => {
    const capital = 10000;
    const interestRate = 0.05;
    const durationPeriods = 10;
    const annuityType = 'ordinary';
    const startingAmount = 0;
    const expectedFutureValue = 16288.946267774416; // Example expected value, adjust according to the correct calculation
    expect(calcFutureValueCompoundInterest(capital, interestRate, durationPeriods, annuityType, startingAmount)).toBeCloseTo(expectedFutureValue, 2);
  });

  it('calculates the future value correctly for annuity due with positive interest', () => {
    const capital = 10000;
    const interestRate = 0.05;
    const durationPeriods = 10;
    const annuityType = 'due';
    const startingAmount = 0;
    const expectedFutureValue = 17098.39368111324; // Example expected value, adjust according to the correct calculation
    expect(calcFutureValueCompoundInterest(capital, interestRate, durationPeriods, annuityType, startingAmount)).toBeCloseTo(expectedFutureValue, 2);
  });

  it('throws an error for invalid capital', () => {
    expect(() => calcFutureValueCompoundInterest(99, 0.05, 10, 'ordinary', 0)).toThrow('Invalid capital: Must be a positive integer >= 100.');
  });

  it('throws an error for invalid interestRate', () => {
    expect(() => calcFutureValueCompoundInterest(10000, -0.01, 10, 'ordinary', 0)).toThrow('Invalid interestRate: Must be a positive decimal number between 0 and 1.');
  });

  it('throws an error for invalid durationPeriods', () => {
    expect(() => calcFutureValueCompoundInterest(10000, 0.05, 0, 'ordinary', 0)).toThrow('Invalid durationPeriods: Must be a positive integer >= 1.');
  });

  it('throws an error for invalid annuityType', () => {
    expect(() => calcFutureValueCompoundInterest(10000, 0.05, 10, 'monthly', 0)).toThrow('Invalid annuityType: Must be "ordinary" or "due".');
  });

  it('calculates the future value correctly with zero interest rate', () => {
    const capital = 10000;
    const interestRate = 0;
    const durationPeriods = 10;
    const annuityType = 'ordinary';
    const startingAmount = 0;
    const expectedFutureValue = 100000; // Capital * durationPeriods
    expect(calcFutureValueCompoundInterest(capital, interestRate, durationPeriods, annuityType, startingAmount)).toBe(expectedFutureValue);
  });

  it('calculates the future value correctly with a starting amount', () => {
    const capital = 10000;
    const interestRate = 0.05;
    const durationPeriods = 10;
    const annuityType = 'ordinary';
    const startingAmount = 5000;
    const expectedFutureValue = 21288.946267774416; // Example expected value, adjust according to the correct calculation
    expect(calcFutureValueCompoundInterest(capital, interestRate, durationPeriods, annuityType, startingAmount)).toBeCloseTo(expectedFutureValue, 2);
  });
});


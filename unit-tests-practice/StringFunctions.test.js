const StringFunctions = require('./StringFunctions.js');

test('capitalize capitalizes a string', () => {
    let result = StringFunctions.capitalize('hello');
    expect(result).toBe('Hello');
});

test('capitalize returns null for a null input', () => {
    let result = StringFunctions.capitalize(null);
    expect(result).toBeNull();
});

test('capitalize should return the number for a number input', () => {
    let result = StringFunctions.capitalize(22);
    expect(result).toBe(22);
});

test('isDivisibleByThree should return true for a number divisible by 3', () => {
    let result = StringFunctions.isDivisibleByThree(9);
    expect(result).toBeTruthy();
});

test('isDivisibleByThree should return false for a number not divisible by 3', () => {
    let result = StringFunctions.isDivisibleByThree(10);
    expect(result).toBeFalsy();
});

test('isDivisibleByThree should return nothing if nothing is passed in', () => {
    let result = StringFunctions.isDivisibleByThree();
    expect(result).toBeFalsy();
});

test('isDivisibleByThree should return false if input is NaN', () => {
    let result = StringFunctions.isDivisibleByThree('A');
    expect(result).toBeFalsy();
});

test('isDivisibleByThree should return false if input is a number as a string', () => {
    let result = StringFunctions.isDivisibleByThree('9');
    expect(result).toBeFalsy();
});
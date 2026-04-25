// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

const validBraces = require("./validBraces.js");

describe("validBraces", () => {
  test("returns true for simple valid braces", () => {
    expect(validBraces("(){}[]")).toBe(true);
  });

  test("returns true for nested valid braces", () => {
    expect(validBraces("([{}])")).toBe(true);
  });

  test("returns false for mismatched braces", () => {
    expect(validBraces("(}")).toBe(false);
  });

  test("returns false for wrong order", () => {
    expect(validBraces("[(])")).toBe(false);
  });

  test("returns false for invalid mixed braces", () => {
    expect(validBraces("[({})](]")).toBe(false);
  });
});

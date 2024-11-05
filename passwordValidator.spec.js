const isPasswordValid = require("./passwordValidator");

test(`At least 8 characters`, () => {
  expect(isPasswordValid("12345678a")).toBe(true);
  expect(isPasswordValid("123456a")).toBe(false);
});

test("Password has at least one digit", () => {
  expect(isPasswordValid("12345678a")).toBe(true);
  expect(isPasswordValid("abcdefgh")).toBe(false);
});

test("Password has at least one letter", () => {
  expect(isPasswordValid("12345678a")).toBe(true);
  expect(isPasswordValid("12345678")).toBe(false);
});

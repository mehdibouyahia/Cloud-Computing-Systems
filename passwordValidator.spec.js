const isPasswordValid = require("./passwordValidator");

test(`At least 8 characters`, () => {
  expect(isPasswordValid("12345678")).toBe(true);
  expect(isPasswordValid("1234567")).toBe(false);
});

test("Password has at least one digit", () => {
  expect(isPasswordValid("12345678")).toBe(true);
  expect(isPasswordValid("abcdefghi")).toBe(false);
});

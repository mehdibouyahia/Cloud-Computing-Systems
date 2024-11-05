const isValidPassword = require("./passwordValidator");

test("Password must contains at least 8 characters", () => {
  const isValid = isValidPassword("12345678");
  expect(isValid).toBe(true);
});

test("Password must contains at least 8 characters", () => {
  const isValid = isValidPassword("1234567");
  expect(isValid).toBe(false);
});

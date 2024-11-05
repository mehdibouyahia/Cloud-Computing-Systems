const isPasswordValid = require("./passwordValidator");

test(`Password is valid`, () => {
  const password = "123456789";
  const isValid = isPasswordValid(password);
  expect(isValid).toBe(true);
});

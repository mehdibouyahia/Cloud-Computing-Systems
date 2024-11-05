function isPasswordValid(password) {
  const hasMinimumLength = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasLetter = /[a-zA-Z]/.test(password);
  return hasMinimumLength && hasNumber && hasLetter;
}

module.exports = isPasswordValid;

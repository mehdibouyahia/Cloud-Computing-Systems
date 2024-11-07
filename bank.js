const bankDAO = require("./bankDAO");

function getBalance(accountID) {
  return bankDAO.retrieveBalance(accountID);
}

const bank = {
  getBalance,
};

module.exports = bank;

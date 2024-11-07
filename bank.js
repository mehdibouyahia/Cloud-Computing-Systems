const bankDAO = require("./bankDAO");
const bankTransfer = require("./bankTransfer");

function getBalance(accountID) {
  return bankDAO.retrieveBalance(accountID);
}

function transferMoney(accountID, amount) {
  bankTransfer
    .transfer(accountID, amount)
    .then(() => {
      bankDAO.debitAccount(accountID, amount);
    })
    .catch((error) => {
      console.log(error);
    });
}

const bank = {
  getBalance,
  transferMoney,
};

module.exports = bank;

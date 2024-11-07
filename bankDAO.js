function retrieveBalance(accountID) {
  console.log("Retrieve balance: ", accountID);
  return 1000;
}

function debitAccount(accoundID, amount) {
  console.log("Debit account: ", accoundID, amount);
}

const bankDAO = {
  retrieveBalance,
  debitAccount,
};

module.exports = bankDAO;

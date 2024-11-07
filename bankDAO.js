function retrieveBalance(accountID) {
  console.log("Retrieve balance: ", accountID);
  return 1000;
}

const bankDAO = {
  retrieveBalance,
};

module.exports = bankDAO;

const bankDAO = require("./bankDAO");
const bank = require("./bank");
const bankTransfer = require("./bankTransfer");

beforeEach(() => {
  jest.spyOn(bankDAO, "retrieveBalance");
  jest.spyOn(bankDAO, "debitAccount");
  jest.spyOn(bankTransfer, "transfer");
});

afterEach(() => {
  jest.restoreAllMocks();
});

test("RetrieveBalance is called but not executed", () => {
  const accountId = 2002;
  const expectedBalance = 1000;

  bankDAO.retrieveBalance.mockReturnValue(expectedBalance);

  const balance = bank.getBalance(accountId);

  expect(bankDAO.retrieveBalance).toHaveBeenCalledWith(accountId);
  expect(balance).toBe(expectedBalance);
});

test("Should transmit paramaters accountID & amount", async () => {
  const accountID = 2002;
  const amount = 1000;

  bankDAO.debitAccount.mockReturnValue(null);
  bankTransfer.transfer.mockResolvedValue(null); //mockReturnValue(Promise.resolve(null));

  await bank.transferMoney(accountID, amount);

  expect(bankDAO.debitAccount).toHaveBeenCalledWith(accountID, amount);
  expect(bankTransfer.transfer).toHaveBeenCalledWith(accountID, amount);
});

test("Transfer is not executed", async () => {
  const accountID = 2002;
  const amount = 1000;

  bankDAO.debitAccount.mockReturnValue(null);
  bankTransfer.transfer.mockRejectedValue(null); // mockReturnValue(Promise.reject(null));

  await bank.transferMoney(accountID, amount);

  expect(bankDAO.debitAccount).not.toHaveBeenCalled();
  expect(bankTransfer.transfer).toHaveBeenCalledWith(accountID, amount);
});

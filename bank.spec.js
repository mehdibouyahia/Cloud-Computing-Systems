const bankDAO = require("./bankDAO");
const bank = require("./bank");

test("RetrieveBalance is called but not executed", () => {
  const accountId = 2002;
  const expectedBalance = 1000;
  const spy = jest.spyOn(bankDAO, "retrieveBalance");
  spy.mockReturnValue(expectedBalance);

  const balance = bank.getBalance(accountId);

  expect(spy).toHaveBeenCalled();
  expect(balance).toBe(expectedBalance);
});
test("Should transmit paramater accountID", () => {
  const accoundID = 2002;
  const spy = jest.spyOn(bankDAO, "retrieveBalance");
  spy.mockReturnValue(null);
  bank.getBalance(accoundID);
  expect(spy).toHaveBeenCalledWith(accoundID);
});

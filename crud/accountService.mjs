import { Account } from "./account.mjs";
import { accountDAO } from "./accountDAO.mjs";

export const accountService = {
  addAccount(lastName, firstName) {
    // COMMAND
    const account = new Account({ lastName: lastName, firstName: firstName });
    accountDAO.insertAccount(account);
  },
  getAccountList() {
    // QUERY
    return accountDAO.retrieveAccountList();
  },
  saveAccount(id, lastName, firstName) {
    // COMMAND
    const account = accountDAO.fetchAccountById(id);
    if (account) {
      account.lastName = lastName;
      account.firstName = firstName;
      accountDAO.updateAccount(account);
    }
  },
  getAccount(id) {
    // QUERY
    return accountDAO.retrieveAccount(id);
  },
};

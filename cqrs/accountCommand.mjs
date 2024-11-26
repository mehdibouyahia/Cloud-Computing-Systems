import { Account } from "./account.mjs";
import { accountCommandDAO } from "./accountCommandDAO.mjs";
import { accountCache } from "./cache.mjs";

export const accountCommand = {
  addAccount(lastName, firstName) {
    // COMMAND
    const account = new Account({ lastName: lastName, firstName: firstName });
    const { creationDate, ...rest } = account;
    const accountSummary = rest;
    accountCommandDAO.insertAccount(account, accountSummary);

    const { id, ...accCache } = account;
    accountCache[account.id] = {
      ...accCache,
      name: `${firstName} ${lastName}`,
    };
    console.log("Updated account cache: ", accountCache);
  },
  saveAccount(id, lastName, firstName) {
    // COMMAND
    const account = accountCommandDAO.fetchAccountById(id);
    if (account) {
      account.lastName = lastName;
      account.firstName = firstName;

      const { creationDate, ...rest } = account;
      const accountSummary = rest;

      accountCommandDAO.updateAccount(account, accountSummary);

      delete account.id;

      accountCache[id] = {
        ...account,
        name: `${account.firstName} ${account.lastName}`,
      };
      console.log("Updated account cache: ", accountCache);
    }
  },
};

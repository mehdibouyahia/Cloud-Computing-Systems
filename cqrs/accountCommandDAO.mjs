import { ACCOUNT_LIST } from "./database.mjs";
import { accountSummaryList } from "./queryDatabase.mjs";
import { Account } from "./account.mjs";

function convert(account) {
  return JSON.parse(JSON.stringify(account));
}

export const accountCommandDAO = {
  insertAccount(account, accountSummary) {
    // COMMAND
    ACCOUNT_LIST.push(convert(account));
    accountSummaryList.push(convert(accountSummary));

    console.log("Current database content:", ACCOUNT_LIST);
    console.log("Current query database content:", accountSummaryList);
  },
  updateAccount(account, accountSummary) {
    // COMMAND
    const index = ACCOUNT_LIST.findIndex((acc) => acc.id === account.id);
    if (index !== -1) {
      ACCOUNT_LIST[index] = convert(account);
      accountSummaryList[index] = convert(accountSummary);
      console.log("Updated database content:", ACCOUNT_LIST);
      console.log("Updated query database content:", accountSummaryList);
    }
  },
  fetchAccountById(id) {
    // COMMAND
    const result = ACCOUNT_LIST.find((acc) => acc.id === id);
    const account = new Account(result);
    return account;
  },
};

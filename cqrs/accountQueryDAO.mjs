import { ACCOUNT_LIST } from "./database.mjs";
import { accountSummaryList } from "./queryDatabase.mjs";
import { accountCache } from "./cache.mjs";

export const accountQueryDAO = {
  retrieveAccountList() {
    // QUERY
    // return ACCOUNT_LIST.map(({ creationDate, ...rest }) => rest);
    return accountSummaryList;
  },
  retrieveAccount(id) {
    // QUERY
    // const account = ACCOUNT_LIST.find((acc) => acc.id === id);
    // if (account) {
    //   const { lastName, firstName, ...rest } = account;
    //   return { ...rest, name: `${firstName} ${lastName}` };
    // }
    // return null;
    const account = accountCache[id];
    if (account) {
      return accountSummaryList.find((acc) => acc.id === id);
    }
    return null;
  },
};

import { accountQueryDAO } from "./accountQueryDAO.mjs";

export const accountQuery = {
  getAccountList() {
    // QUERY
    return accountQueryDAO.retrieveAccountList();
  },
  getAccount(id) {
    // QUERY
    return accountQueryDAO.retrieveAccount(id);
  },
};

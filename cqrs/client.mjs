import { accountCommand } from "./accountCommand.mjs";
import { accountQuery } from "./accountQuery.mjs";

// Ajouter un compte : Qst 3
accountCommand.addAccount("Ainz", "Ooal Gown");
// Lister les comptes : Qst 3
const accountList = accountQuery.getAccountList();
console.log(
  "Account list without creation date ( getAccountList Called ):",
  accountList
);
// Modifier un compte Qst 3
const accountId = accountList[0].id;
accountCommand.saveAccount(accountId, "Tempest", "Rimuru");

// Still Qst 3
const accountListAfter = accountQuery.getAccountList();
console.log(
  "Account list after update ( getAccountList Called ):",
  accountListAfter
);
// Récupérer un compte Qst 3
const account = accountQuery.getAccount(accountId);
console.log("Retrieved account:", account);

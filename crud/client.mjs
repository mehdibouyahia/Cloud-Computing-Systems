import { accountService } from "./accountService.mjs";

// Ajouter un compte : Qst 3
accountService.addAccount("Ainz", "Ooal Gown");

// Lister les comptes : Qst 3
const accountList = accountService.getAccountList();
console.log(
  "Account list without creation date ( getAccountList Called ):",
  accountList
);

// Modifier un compte Qst 3
const accountId = accountList[0].id;
accountService.saveAccount(accountId, "Tempest", "Rimuru");

// Still Qst 3
const accountListAfter = accountService.getAccountList();
console.log(
  "Account list after update ( getAccountList Called ):",
  accountListAfter
);

// Récupérer un compte Qst 3
const account = accountService.getAccount(accountId);
console.log("Retrieved account:", account);

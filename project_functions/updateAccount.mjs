// módulos externos
import chalk from 'chalk';
import inquirer from 'inquirer';

// módulos internos
import fs from 'fs';

// funções do sistema
import checkAccount from './checkAccount.mjs';
import operation from './operation.mjs';

export default function updateAccount() {
  inquirer.prompt([
    {
      name: "accountName",
      message: "Qual o nome da conta que você deseja editar? ",
    },
  ])
    .then((answer) => {
      const accountName = answer["accountName"];
      if (!checkAccount(accountName)) {
        return updateAccount();
      } else {
        inquirer.prompt([
          {
            name: "newAccountName",
            message: "Qual o novo nome da conta? ",
          },
        ])
          .then((answer) => {
            const newAccountName = answer["newAccountName"];
            fs.rename(`accounts/${accountName}.json`, `accounts/${newAccountName}.json`, (error) => {
              if (error) {
                console.log(error);
              } else {
                console.log(`A conta ${accountName} foi renomeada para ${newAccountName}.`);
                return operation();
              }
            });
          })
          .catch((error) => { console.log(error) });
      }
    })
    .catch((error) => { console.log(error) });
};

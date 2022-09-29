// módulos externos
import chalk from 'chalk';
import inquirer from 'inquirer';

// módulos internos
import fs from 'fs';

// funções do sistema
import checkAccount from './checkAccount.mjs';
import operation from './operation.mjs';

export default function removeAccount() {
  inquirer.prompt([
    {
      name: "accountName",
      message: "Qual o nome da conta que deseja excluir? ",
    },
  ])
    .then((answer) => {
      const accountName = answer["accountName"];
      if (!checkAccount(accountName)) {
        return removeAccount();
      } else {
        fs.unlink(`accounts/${accountName}.json`, (error) => {
          if(error) {
            console.log(error)
          } else {
            console.log(chalk.bgGreen(`A conta ${accountName} foi excluída com sucesso.`));
            return operation();
          };
        });
      };
    })
    .catch((error) => { console.log(error) });
};

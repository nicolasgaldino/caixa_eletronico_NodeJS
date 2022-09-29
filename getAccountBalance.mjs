// módulos externos
import chalk from 'chalk';
import inquirer from 'inquirer';

// módulos internos
import fs from 'fs';

// funções do sistema
import checkAccount from './checkAccount.mjs';
import getAccount from './getAccount.mjs';
import operation from './operation.mjs';

export default function getAccountBalance() {
  inquirer.prompt([
    {
      name: "accountName",
      message: "Qual o nome da conta? ",
    },
  ])
    .then((answer) => {
      const accountName = answer["accountName"];
      if (!checkAccount(accountName)) {
        return getAccountBalance();
      } else {
        const accountData = getAccount(accountName);
        console.log(chalk.bgBlue.black(`Olá, ${accountName}! O saldo da sua conta é R$${accountData.balance}.`));
        operation();
      };
    })
    .catch((error) => { console.log(error) }
    );
};

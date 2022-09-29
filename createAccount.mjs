// módulos externos
import chalk from 'chalk';
import inquirer from 'inquirer';

// módulos internos
import fs from 'fs';

// funções do sistema

import operation from './operation.mjs';

// funções do sistema 

export default function createAccount() {
  console.log(chalk.bgGreen.black("Obrigado por escolher nosso banco."));
  console.log(chalk.green("Siga as intruções abaixo."));
  inquirer.prompt([
    {
      name: "accountName",
      message: "Por favor digite um nome para sua conta: ",
    },
  ]).then((answer) => {
    const accountName = answer["accountName"];
    console.info(accountName);
    if (!fs.existsSync("accounts")) {
      fs.mkdirSync("accounts");
    };
    if (fs.existsSync(`accounts/${accountName}.json`)) {
      console.log(chalk.bgRed.black("Esta cpnta já existe, por favor informe um nome diferente."));
      return createAccount();
    };
    fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0}', (error) => {console.log(error)});
    console.log(chalk.green(`${accountName}, sua conta foi criado com sucesso! Obrigado por escolher nosso banco.`))
    operation();
  })
  .catch((error) => { console.log(error) });
};

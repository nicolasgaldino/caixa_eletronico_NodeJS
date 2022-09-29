// módulos externos
import chalk from 'chalk';
import inquirer from 'inquirer';

// módulos internos
import fs from 'fs';

export default function operation() {
  inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "O que você deseja fazer?",
      choices: [
        "Criar conta.",
        "Consultar saldo.",
        "Depositar.",
        "Sacar.",
        "Sair."
      ]
    },
  ])
    .then((choice) => {
      const action = choice['action'];
      switch (action) {
        case "Criar conta.":
          console.log("Olá, mundo!!!")
          break;
        case "Consultar saldo.":
          console.log("Olá, mundo!!!")
          break;
        case "Depositar.":
          console.log("Olá, mundo!!!")
          break;
        case "Sacar.":
          console.log("Olá, mundo!!!")
          break;
        case "Sair.":
          console.log(chalk.bgBlue.black("Obrigado por usar o Accounts!"));
          process.exit();
          break;
      };
    })
    .catch((error) => console.log(error));
};

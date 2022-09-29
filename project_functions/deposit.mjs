// módulos externos
import inquirer from 'inquirer';

// funções do sistema
import checkAccount from './checkAccount.mjs';
import addAmount from './addAmount.mjs';
import operation from './operation.mjs';

export default function deposit() {
  inquirer.prompt([
    {
      name: "accountName",
      message: "Qual o nome da conta? ",
    },
  ])
    .then((answer) => {
      const accountName = answer["accountName"];
      if (!checkAccount(accountName)) {
        return deposit();
      };
      inquirer.prompt([
        {
          name: "amount",
          message: "Quanto você deseja depositar? ",
        },
      ])
        .then((value) => {
          const amountValue = value["amount"];
          addAmount(accountName, amountValue);
          operation();
        })
        .catch((error) => { console.log(error) });
    })
    .catch((error) => { console.log(error) });
};

// módulos externos
import inquirer from 'inquirer';

// funções do sistema
import checkAccount from './checkAccount.mjs';
import removeAmount from './removeAmount.mjs';

export default function withDraw() {
  inquirer.prompt([
    {
      name: "accountName",
      message: "Qual o nome da conta? ",
    },
  ])
    .then((answer) => {
      const accountName = answer["accountName"];
      if (!checkAccount(accountName)) {
        return withDraw();
      } else {
        inquirer.prompt([
          {
            name: "amount",
            message: "Quanto você deseja sacar? ",
          },
        ])
          .then((answer) => {
            const amount = answer["amount"];
            removeAmount(accountName, amount);
          })
          .catch((error) => { console.log(error) })
      };
    })
    .catch((error) => { console.log(error) }
    );
};

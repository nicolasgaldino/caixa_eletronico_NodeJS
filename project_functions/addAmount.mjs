// módulos externos
import chalk from 'chalk';

// módulos internos
import fs from 'fs';

// funções do sistema
import getAccount from './getAccount.mjs';
import deposit from './deposit.mjs';

export default function addAmount(accountName, amount) {
  const accountData = getAccount(accountName);
  if (!amount) {
    console.log(chalk.bgRed.black(`A conta informado ${accountName} não existe. Por favor verifique e tente novamente.`));
    return deposit();
  } else {
    accountData.balance = Number(amount) + Number(accountData.balance);
    fs.writeFileSync(
      `accounts/${accountName}.json`,
      JSON.stringify(accountData),
      (error) => { console.log(error) },
    );
    console.log(chalk.green(`Foi depositado o valor de R$${amount}, na conta de ${accountName}.`));
  };
};

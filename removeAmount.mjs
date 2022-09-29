// módulos externos
import chalk from 'chalk';

// módulos internos
import fs from 'fs';

// funções do sistema
import getAccount from './getAccount.mjs';
import withDraw from './withDraw.mjs';
import operation from './operation.mjs';

export default function removeAmount(accountName, amount) {
  const accountData = getAccount(accountName);
  if (!amount) {
    console.log(chalk.bgRed.black("Nenhum valor foi digitado, por favor verifique e tente novamente."));
    return withDraw();
  } else if (accountData.balance < amount) {
    console.log(chalk.bgRed.black(`O valor solicitado é maior que o valor de saldo disponível, por favor tente novamente. Saldo disponível: ${accountData.balance}`));
    return withDraw();
  } else {
    accountData.balance = Number(accountData.balance) - Number(amount);
    fs.writeFileSync(
      `accounts/${accountName}.json`,
      JSON.stringify(accountData),
      (error) => { console.log(error) },
    );
    console.log(chalk.green(`Saque no valor de R$${amount}. Valor disponível para novos saques: R${accountData.balance}`));
    operation();
  };
};

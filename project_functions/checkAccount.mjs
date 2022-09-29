// módulos externos
import chalk from 'chalk';

// módulos internos
import fs from 'fs';

export default function checkAccount(accountName) {
  if (!fs.existsSync(`accounts/${accountName}.json`)) {
    console.log(chalk.bgRed.black(`A conta informada, ${accountName} não existe. Por favor tente novamente.`));
    return false;
  };
  return true;
};

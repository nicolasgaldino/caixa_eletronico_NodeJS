// módulos internos
import fs from 'fs';

export default function getAccount(accountName) {
  const accountJson = fs.readFileSync(`accounts/${accountName}.json`, {
    encoding: "utf-8",
    flag: "r",
  });
  return JSON.parse(accountJson);
};

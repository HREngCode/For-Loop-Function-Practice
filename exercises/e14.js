
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

import { bankAccounts } from "../data/data";

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let accounts = []

  for(let i = 0; i < array.length; i++) {
    let withdrawalResults = 0;
    let depositResults = 0;
    let withdrawalItem = array[i].withdrawals;
    let depositItem = array[i].deposits;
    let accountBalance = array[i].balance;

      if(withdrawalItem != undefined) {
        for(let x = 0; x < withdrawalItem.length; x++) {
          withdrawalResults += withdrawalItem[x];
        }
      } 

      if (depositItem != undefined) {
        for(let y = 0; y < depositItem.length; y++) {
          depositResults += depositItem[y];
        }
      }

      if (depositResults-withdrawalResults != accountBalance) {
        accounts.push(array[i]);
      }
    }
  return accounts;     
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

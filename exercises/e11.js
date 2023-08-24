// EXERCISE 11
// Return an array of withdrawal sums of each bank account.
// If the account doesn't have withdrawals, it's sum is 0.
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 0, 43242.34, 0, 23432]

import { bankAccounts } from "../data/data";

export function getAllWithdrawals(array) {
  // Your code goes here...
  let withdrawalTotals = []

  for(let i = 0; i < array.length; i++) {
    let results = 0;
    let withdrawalArray = array[i].withdrawals;

    if(withdrawalArray != undefined) {
      for(let x = 0; x < withdrawalArray.length; x++) {
        results += withdrawalArray[x];
      }
      withdrawalTotals.push(results);
    } 
    else {
      results = 0;
      withdrawalTotals.push(results);
    }    
  }
    return withdrawalTotals;     
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

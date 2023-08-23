// EXERCISE 11
// Return an array of withdrawal sums of each bank account.
// If the account doesn't have withdrawals, it's sum is 0.
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 0, 43242.34, 0, 23432]

import { bankAccounts } from "../data/data";

export function getAllWithdrawals(array) {
  // Your code goes here...

  let withdrawalArray = []

  for(let i = 0; i < array.length; i++) {
    console.log(array[i])
    let results = 0;
    withdrawalArray = array[i].withdrawals;
    for(let x = 0; x < withdrawalArray.length; x++) {
      if(array[i].withdrawals !== undefined) {
        console.log(withdrawalArray[x]);
        results += withdrawalArray[x];
      }
      else {
        results = 0;
      }

      withdrawalArray.push(results);
    }


    console.log(results);
    
    }
    console.log(withdrawalArray);
    return withdrawalArray; 
  }

let account = getAllWithdrawals(bankAccounts);
console.log(account);

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

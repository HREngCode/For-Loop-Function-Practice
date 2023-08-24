
// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]

import { bankAccounts } from "../data/data";

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  // Your code goes here...
  let accounts = []

  for(let i = 0; i < array.length; i++) {
    let results = 0;
    let depositArray = array[i].deposits;

    if(depositArray != undefined) {
      for(let x = 0; x < depositArray.length; x++) {
        results += depositArray[x];
      }
      if (results < 2000) {
        accounts.push(array[i]);
      }
    } 
    else {
      results = 0;
      accounts.push(array[i]);
    }    
  }
    return accounts;     
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

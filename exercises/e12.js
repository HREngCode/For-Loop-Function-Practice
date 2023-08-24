
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

import { bankAccounts } from "../data/data";

export function getAllDepositsGreaterThanOneHundred(array) {
  // Your code goes here...
    let object = null;
    let resultArray = [];
  
    for(let i = 0; i < array.length; i++) {
      if(array[i].deposits != undefined) {
        for(let x = 0;  x < array[i].deposits.length; x++) {
          let deposit = array[i].deposits[x];
          if (deposit > 100){
            object = deposit;
            resultArray.push(object);
          }
        }
      }
    }return resultArray;
  }

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

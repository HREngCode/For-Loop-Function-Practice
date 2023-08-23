// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

import { bankAccounts } from "../data/data";

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
  let object = null;
  let resultArray = [];

  for(let i = 0; i < array.length; i++) {
    let nameCase = array[i].name.toLowerCase()
    for(let x = 0;  x < nameCase.length; x++) {
      if (nameCase[x] === letter){
        object = array[i].name;
        resultArray.push(object);
      }
    }
  }return resultArray;
}

let account1 = getClientsWithLetterInName(bankAccounts, 'a');
let account2 = getClientsWithLetterInName(bankAccounts, 'c');
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

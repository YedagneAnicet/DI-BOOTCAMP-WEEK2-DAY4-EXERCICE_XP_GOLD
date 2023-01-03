/*Exercise 1 : Is_Blank
Instructions
Write a program to check whether a string is blank or not. */

function isBlank(str) {
  if (str.length === 0) {
    return true;
  } else {
    return false;
  }
}

/*Exercise 2 : Abbrev_name
Instructions
Write a JavaScript function to convert a string into an abbreviated form. */

function abbrevName(str) {
  let tabName = str.split(" ");
  for (let i = 1; i < tabName.length; i++) {
    tabName[i] = tabName[i].charAt(0).toUpperCase() + ".";
  }
  return tabName.join(" ");
}

/*Exercise 3 : SwapCase
Instructions
Write a JavaScript function which takes a string as an argument and swaps the case of each character. */

function swapCase(str) {
  let tabSwapCase = str.split(" ");
  let firstLetter;
  let words = [];
  let wordsJoin = [];
  for (let i = 0; i < tabSwapCase.length; i++) {
    firstLetter = tabSwapCase[i].charAt(0).toLowerCase();
    for (let j = 0; j < tabSwapCase[i].length; j++) {
      words[j] = tabSwapCase[i].charAt(j + 1).toUpperCase();
    }
    wordsJoin[i] = words.join("");

    tabSwapCase[i] = firstLetter + wordsJoin[i];
  }
  return tabSwapCase.join(" ");
}

/*Exercise 4 : Omnipresent Value
Instructions
Create a function that determines whether an argument is omnipresent for a given array.
A value is omnipresent if it exists in every subarray inside the main array. */

function isOmnipresent(array, number) {
  let compte = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === number) {
        compte += 1;
        break;
      }
    }
  }
  if (compte === array.length) {
    return true;
  } else {
    return false;
  }
}

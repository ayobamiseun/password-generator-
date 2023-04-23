const { isCursorAtStart } = require("@testing-library/user-event/dist/utils");

let characters = "";
let passwordLength = 0;

function setUpperCase(isUpperCase) {
  if (isUpperCase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  return "";
}
function setLowerCase(isLowerCase) {
  if (isLowerCase) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  return "";
}
function setSymbols(isSymbol) {
  if (isSymbol) {
    characters += "!@#$%^&*()-_+={}[]|:;<>,.?/";
  }

  return "";
}
function setNumber(isNumeric) {
  if (isNumeric) {
    characters += "0123456789";
  }
  return "";
}
function getRandomInteger(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function passwordCharacters() {
  const characterList = characters;
  let password = "";
  if (characterList.length > 0) {
    for (let i = 0; i < passwordLength; i++) {
      password += characterList[getRandomInteger(0, characterList.length - 1)];
    }
    characters = "";
    passwordLength = 0;

    return password;
  }
}

export function setPasswordLength(length) {
  passwordLength = length;
  return passwordLength;
}

export function generatePasswordLength() {
  return passwordLength;
}

export function generatePassword(passwordProps, pwdLength) {
  const { Uppercase, Lowercase, Symbols, numbers } = passwordProps;

  setPasswordLength(pwdLength);
  setUpperCase(Uppercase);
  setLowerCase(Lowercase);
  setSymbols(Symbols);
  setNumber(numbers);

  const password = passwordCharacters();
  return password;
}

export function copyToClipBoard(elementRef) {
    elementRef.select();
    document.execCommand('copy');

}
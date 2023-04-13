let characters =''
let passwordLength = 0;

function  setUpperCase(isUpperCase) {
    if(isUpperCase) {
        characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    return ''
}
function  setLowerCase(isLowerCase) {
    if(isLowerCase) {
        characters += 'abcdefghijklmnopqrstuvwxyz' 
    }
    return ''
}

function  setSymbols(isSymbol) {
    if(isSymbol) {
        characters += '! @ # $ % ^ & * ( ) - _ + = { } [ ] | \ : ; "  < > , . ? /' 
    }
    return ''
}
function  setNumber(isNumeric) {
    if(isNumeric) {
        characters += '0123456789' 
    }
    return ''
}
function getRandomInteger(max, min) {
    return Math.floor(Math.random() *( max - min  + 1))
}

export function setPasswordLength(length) {
   passwordLength = length;
   return passwordLength;
}
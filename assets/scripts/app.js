const defaultResult = 0
let currentResult = defaultResult;
let inputVal = parseInt(userInput.value);
let logEntries = [] ;

function getUserInput() {
  return parseInt(userInput.value);
}

function calcLog(operator, initialVal, inputNum){
const calcDescription = `${initialVal} ${operator} ${inputNum}`;
outputResult(currentResult, calcDescription);
}

function writeToLog(operationIdentifier, prevVal, inputVal, result){
const log = {
  operation: operationIdentifier,
  prevVal: prevVal,
  input: inputVal,
  finalVal: result,
};
logEntries.push(log);
console.log(logEntries);
}
function calculation(calculationType){
  const enteredNum = getUserInput();
  const initialResult = currentResult;
  let mathOperator;
  if (
    calculationType !== 'ADD' &&
    calculationType !== 'SUBSTRACT' &&
    calculationType !== 'MULTIPLY' &&
    calculationType !== 'DIVIDE'
  ) {
    return;
  }
  if(calculationType === 'ADD'){
    currentResult += enteredNum;
    mathOperator = '+';
  } else if (calculationType === 'SUBSTRACT') {
    currentResult -= enteredNum;
    mathOperator = '-';
  } else if (calculationType === 'MULTIPLY') {
    currentResult *= enteredNum;
    mathOperator = '*';
  } else if (calculationType === 'DIVIDE') {
    currentResult /= enteredNum;
    mathOperator = '/';
  }
  calcLog(mathOperator, initialResult, enteredNum);
  writeToLog(calculationType, initialResult, enteredNum, currentResult);
}
function add(){
  calculation('ADD');
}
function substract() {
  calculation('SUBSTRACT');
}
function multiply() {
  calculation('MULTIPLY');
}
function divide() {
  calculation('DIV');
}
addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
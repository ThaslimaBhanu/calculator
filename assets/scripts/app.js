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

function add(){
const enteredNum = getUserInput();
const initialResult = currentResult;
currentResult += enteredNum;
calcLog('+', initialResult, enteredNum);
writeToLog('ADD', initialResult, enteredNum, currentResult);
}

function substract() {
  const enteredNum = getUserInput();
  const initialResult = currentResult;
  currentResult -= enteredNum;
  calcLog("-", initialResult, enteredNum);
  writeToLog('SUBSTRACT', initialResult, enteredNum, currentResult);
}

function multiply() {
  const enteredNum = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNum;
  calcLog("*", initialResult, enteredNum);
  writeToLog('MULTIPLY', initialResult, enteredNum, currentResult)
}

function divide() {
  const enteredNum = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNum;;
  calcLog("/", initialResult, enteredNum);
  writeToLog('DIVIDE', initialResult, enteredNum, currentResult)
}
addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', substract)
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
//some global variables
var firstNumber = true;
var secondNumber = false;
var operator = false;

//set up the event listeners for button on the page
function setUpListeners() {
  //get the elements so we can set them in the event
  var numberButtons = document.getElementsByClassName('buttonNum');
  var operatorButtons = document.getElementsByClassName('operator');
  var clearButton = document.getElementsByClassName('buttonClear');
  var equalButton = document.getElementsByClassName('equals');

  setNumberButtonListeners(numberButtons);
  setOperatorButtonListeners(operatorButtons);
  clearButton[0].addEventListener('click', clearCalculator);
  equalButton[0].addEventListener('click', getAnswer);
}
//clear the calculator and return to the inital conditions, if I wanted to print "0" or any other string, instead of "Sparta Calculator", I just need to change after innerHTML = "string I want"
function clearCalculator() {
  var calculatorScreen = document.getElementById('screen');
  calculatorScreen.innerHTML = "Sparta Calculator";
  firstNumber = true;
  secondNumber = false;
  operator = false;
}
//where the operations occur
function getAnswer() {
  var calculatorScreen = document.getElementById('screen');
  var answer = doCalculation();
  calculatorScreen.innerHTML = answer;
  console.log('answer is---', answer);
}
function doCalculation() {
  switch (operator) {
    case '+':
      return (firstNumber +  secondNumber).toFixed(2);
      break;
    case '-':
      return (firstNumber - secondNumber).toFixed(2);
      break;
    case '*':
      return (firstNumber * secondNumber).toFixed(2);
      break;
    case '/':
      return (firstNumber / secondNumber).toFixed(2);
      break;
    default:
      return 'Err'
  }
}
//setting the listeners for the number buttons
function setNumberButtonListeners(buttons) {
  var calculatorScreen = document.getElementById("screen");
  //create a loop to set the listener on each buttons
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(event) {
      if (firstNumber === true) {
        calculatorScreen.innerHTML = this.innerHTML;
        firstNumber = parseInt(this.innerHTML);
        operator = true;
        console.log('firstNumberrrrr', firstNumber);
      } else if (secondNumber === true) {
        secondNumber = parseInt(this.innerHTML);
        calculatorScreen.innerHTML = this.innerHTML;
        console.log('secondNumber', secondNumber);
      }
    })
  }
}
//setting the listeners for the operator buttons
function setOperatorButtonListeners(operatorButtons) {
  var calculatorScreen = document.getElementById("screen");
  for (var i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', function(event) {
      if (operator === true) {
        calculatorScreen.innerHTML = this.innerHTML;
        operator = this.innerHTML;
        secondNumber = true;
        console.log('operator', operator);
      }
    })
  }
}
setUpListeners();

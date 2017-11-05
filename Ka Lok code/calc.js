document.addEventListener("DOMContentLoaded", function(){
  console.log("The content is loaded");
  var screen = document.getElementById("screen");
  var Nums =[];
  //Get values
  var buttons = document.querySelectorAll("button");
  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.addEventListener("click", function(event){
      Nums.push(this.value);
      var equ = Nums.join("")
      screen.innerHTML = equ;
    })
  }
  //Equation calculation
  var equal = document.querySelector(".equals");
  equal.addEventListener("click", eqtn);
  function eqtn(){
    var str = Nums.join("");
    var total =eval(str);
    screen.innerHTML = total;
    Nums = [];
    Nums.push(total);
  }
  //Press AC to clear
  var ac = document.querySelector(".buttonClear");
  ac.addEventListener("click", clear);
  function clear(){
    screen.innerHTML = "Sparta Calculator";
    Nums = [];
  }
});

//btn remove
var btnvar1 = document.getElementById('btnh1');

function Toggle1(){
         if (btnvar1.style.color =="red") {
             btnvar1.style.color = "grey"
         }
         else{
             btnvar1.style.color = "red"
         }
}

//btn like
var btnvar2 = document.getElementById('btnh2');

function Toggle2(){
         if (btnvar2.style.color =="red") {
             btnvar2.style.color = "grey"
         }
         else{
             btnvar2.style.color = "red"
         }
}
//inc dec

let counter = 0;

function increment() {
  counter++;
}

function decrement() {
  counter--;
}

function get() {
  return counter;
}

const inc = document.getElementById("increment");
const input = document.getElementById("input1");
const dec = document.getElementById("decrement");

inc.addEventListener("click", () => {
  increment();
  input.value = get();
});

dec.addEventListener("click", () => {
  if (input.value > 0) {
    decrement();
  }
  input.value = get();
});
// /*total Price */
// function calc(){
//   var n1 = input.value;
//   document.getElementById("item_price").value=110*n1;
// }
/* */
//btn3 remove
var btnvar3 = document.getElementById('btnh3');

function Toggle3(){
         if (btnvar3.style.color =="red") {
             btnvar3.style.color = "grey"
         }
         else{
             btnvar3.style.color = "red"
         }
}

//btn4 like
var btnvar4 = document.getElementById('btnh4');

function Toggle4(){
         if (btnvar4.style.color =="red") {
             btnvar4.style.color = "grey"
         }
         else{
             btnvar4.style.color = "red"
         }
}

//inc2 dec2

let counterD = 0;

function incrementD() {
  counterD++;
}

function decrementD() {
  counterD--;
}

function getD() {
  return counterD;
}

const incD = document.getElementById("incrementD");
const inputD = document.getElementById("inputD");
const decD = document.getElementById("decrementD");

incD.addEventListener("click", () => {
  incrementD();
  inputD.value = getD();
});

decD.addEventListener("click", () => {
  if (inputD.value > 0) {
    decrementD();
  }
  inputD.value = getD();
});
/*total Price */
// function calc2(){
//   var n2 = inputD.value;
//   document.getElementById("item_price2").value=110*n2;
// }
/* */
function calc3(){
  var n1 = input.value;
 
  var n2 = inputD.value;
  document.getElementById("item_price3").value=(160*n2)+(110*n1);
}

/* */


function removeDummy() {
  var elem = document.getElementById('item');
  elem.parentNode.removeChild(elem);
 }
 function removeDummy2() {
  var elem = document.getElementById('item2');
  elem.parentNode.removeChild(elem);
 }


function getTheName(){
    var put1 = document.getElementById("input1");
    return put1.value
}

function getTheUserDate(){
    var put2 = document.getElementById("input2");
    return put2.value
}
function changeColorFirst(){
  document.getElementById("result").innerHTML = "welcome";
  document.getElementById("result").style.color = "blue";
}
function changeColorNoEntry(){
    document.getElementById("result").innerHTML = "No Entry";
    document.getElementById("result").style.color = "red";
}
function someHover(){
   document.getElementById("result").style.color = "green";
}

function tempDate(){
    var someTime = new Date("01/01/2004");
    return someTime
}
function mainFunction(){
  if ( ) {
    document.getElementById("result").innerHTML =getTheUserDate() + getTheUserDate() ;
    } 
  else {
  }  
}




// var myPara = document.getElementById("result");
// var someAge = new Date("01/01/2004");
// function mainFunc() {
//   if (put2 < someAge) {
//     myPara.addEventListener("click", printMessageToScreen);
//     myPara.innerHTML = "welcome" + put1;
//   } else {
//     myPara.innerHTML = "No Entry" + put1;
//     document.getElementById("result").style.background = "red";
//   }
// }

// function printMessageToScreen() {
//   document.getElementById("result").style.background = "blue";
//   document.getElementById("result").innerHTML = put1;
// }

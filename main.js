

function getTheName(){
    var put1 = document.getElementById("input1");
    return put1.value;
}

function getTheUserDate(){
    var put2 = document.getElementById("input2");
    return put2.value;
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

document.getElementById("btn1").
addEventListener("click",mainFunction);


function mainFunction(){
  if(getTheName() && getTheUserDate() != ""){
    if(getTheUserDate() <= "01/01/2004" ){
          document.getElementById("result").innerHTML =
          getTheUserDate() + getTheName()
        }
        else{
          document.getElementById("result").innerHTML =
          changeColorNoEntry()
        }
  }

    } 

    // 3)	התכנית מקבלת מהמשתמש שם משפחה ו 4 שמות פרטיים שונים, בעת לחיצה על כפתור מדפיסה את כל השמות ביחד עם השם משפחה, כרשימה. 

// function someMainFunction(){
//   document.getElementById("myUl").innerHTML = 


function secondMainFunction(){
 var valueUser = document.querySelectorAll(".targil3");
  var result = "";
  for(var i = 0 ; i<valueUser.length;i++){
    result += "<br>" + valueUser[i].value + someTempFunction()
  };
  document.getElementById("myP22").innerHTML =
    "<li>" + result + " " + someTempFunction() + "</li>";

};

function myTempArray(){
  document.getElementById("myP22").innerHTML = secondMainFunction();
}

function someTempFunction(){
  var x = document.getElementById("onlyId");
return x.value
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

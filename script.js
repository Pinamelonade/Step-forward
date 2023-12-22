var teaScore = 0;
var coffeeScore = 0;

var ansCount = 0;

var result = document.getElementById("result");


var q1a1 = document.getElementById ("q1a1");
var q1a2 = document.getElementById ("q1a2");

var q2a1 = document.getElementById ("q2a1");
var q2a2 = document.getElementById ("q2a2");

var q3a1 = document.getElementById ("q3a1");
var q3a2 = document.getElementById ("q3a2");

q1a1.addEventListener("click", coffee);
q1a2.addEventListener("click", tea);

q2a1.addEventListener("click", coffee);
q2a2.addEventListener("click", tea);

q3a1.addEventListener("click", coffee);
q3a2.addEventListener("click", tea);

restart.addEventListener ("click", resetQuiz);

function coffee (){
  coffeeScore += 1;
  ansCount += 1;
  console.log ("coffeScore =" + coffeeScore + "ansCount =" + ansCount);


if (ansCount == 3){
   console.log ("Quiz is done!")
   updateResult ();
  }
}

function tea () {
  teaScore = teaScore + 1;
  ansCount = ansCount + 1;
  console.log ("teaScore =" + teaScore +"ansCount =" + ansCount);


  if (ansCount == 3){
   console.log ("Quiz is done!")
   updateResult();
  }
}

  function updateResult() {
  if (coffeeScore >= 2) {
    result.innerHTML = "You are a coffee person!";
    console.log("You are a coffee person!")
  } else if (teaScore >= 2) {
    result.innerHTML = "You are a tea person!";
    console.log("You are a tea person!");
  }
  }
function resetQuiz (){
  result.innerHTML = "You are...";
  teaScore = 0;
  coffeeScore = 0;
  ansCount = 0 ;
  console.log ("coffeScore =" + coffeeScore+ " teaScore =" + teaScore +" ansCount =" + ansCount)
}

var answer= ["di", "sul","della","all'","con l'","a", "a", "sul", "per", "alle", "di", "di", "con","alle","di","a","di","dal", "Per", "da", "a","con", "di", "della","di","per", "al", "di" ];

var correctCount = 0;
var result;
var button = document.getElementById("button");


for(var i = 0; i< answer.length; i++){
  var but = document.getElementsByName("r" + (i + 1))[0];
  but.addEventListener("keypress", function(event){
    if(event.keyCode === 13){
      event.preventDefault();
      button.click();
    }
    
  });
  
}

function input() {
  for (var i = 0; i < answer.length; i++) {
    var textBox = document.getElementsByName("r" + (i + 1))[0];
    if (textBox.value == answer[i]) {
      textBox.style.color = "green";
      correctCount++;    
    }
    else{
      textBox.style.color = "red"
    }
  textBox.value=answer[i];
  textBox.disabled = true;

 }
  result = correctCount * 100 / answer.length;
  result = result.toFixed(0);
  if(result < 60){
    alert("Hai preso " + result + "% " + "... starai meglio la prossima volta 😁😁") 
  }
  if(result >= 60){
    alert("Hai preso " + result + "% " + "... Bravissimo!! 😍😍😍 ")
  }
  correctCount = 0;
}

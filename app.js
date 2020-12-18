var timePara=document.querySelector(".clock");
var startBtn=document.querySelector("#start");
var stopBtn=document.querySelector("#stop");
var resetBtn=document.querySelector("#reset");
let secondCount=0;
function displayCount(){
  //for displaying ours minutes and seconds
  var hours=Math.floor(secondCount/3600);
  var minutes= Math.floor((secondCount%3600)/60);
  var seconds=Math.floor(secondCount%60);

  let displayhours=(hours<10)?"0"+hours:hours;
  let displayMinutes=(minutes<10)?"0"+minutes:minutes;
  let displaySeconds=(seconds<10)?"0"+seconds:seconds;
  timePara.textContent=displayhours+":"+displayMinutes+":"+displaySeconds;

  secondCount++;
}
let stopWatch;
//when start btn is clicked
startBtn.addEventListener("click",function(){
  stopWatch=setInterval(displayCount,1000);
  startBtn.disabled=true;
});
//for the stop button
stopBtn.addEventListener("click",function(){
  clearInterval(stopWatch);
  startBtn.disabled=false;
});

//for reset button
resetBtn.addEventListener("click",function(){
  secondCount=0;
  startBtn.disabled=false;
  timePara.textContent="00:00:00";
});
displayCount();

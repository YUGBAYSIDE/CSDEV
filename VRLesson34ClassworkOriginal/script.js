let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let time_text, balls = [], t = 60, s = 0;

/* Challenge 
   Create the necessary variables to store and display the score.  Assign 
   them appropriate values in the onload function
*/

window.onload = function(){
  scene = document.querySelector("a-scene");
  time_text = document.getElementById("time");
  score_text = document.getElementById("score");
  over_text = document.getElementById("over");

  for(let i = 0;i < 10; i++){
    let x = rnd(-10,10);
    let y = rnd(-10,10);
    let z = rnd(-10,10);

    balls.push(new Ball(x,y,z));
  }
  
  scoreCount();
  countdown();
  loop();
}


function countdown(){
  time_text.setAttribute("value",`Time: ${t}`);
  t--;
  if(t < 0){
    t = 0;
    gameOver();
  }
  setTimeout(countdown,1000);
}
function loop(){
  /* Challenge
     Display the score in the HUD
  */
  for(let ball of balls){
    ball.move();
  }
  window.requestAnimationFrame(loop);
}

function scoreCount(){
  score_text.setAttribute("value", `Score: ${s}`);
  s++;
}

function gameOver(){
  over_text.setAttribute("value", "GAME OVER");
}
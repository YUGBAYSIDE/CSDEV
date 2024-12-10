let rnd = (l,u) => Math.random()*(u-l)+l;
let scene, balls=[];
window.onload = function(){
  scene = document.querySelector("a-scene");

  for(let i = 0; i<200; i++){
    balls.push(new Ball(rnd(-100, 100), rnd(5, 100), rnd(-100, 100)));
  }
  
}

function loop(){


  window.requestAnimationFrame(loop);
}
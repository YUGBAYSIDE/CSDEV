let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, dudeTemplate, dudes = [], d;

window.onload = function(){
  scene = document.querySelector("a-scene");
  dudeTemplate = document.querySelector("#dudeTemplate");

  //Challenge 4: Create an array of dudes at random locations.
  for(let i = 0; i<50; i++){
    d = new Dude(rnd(-40, 40), 1, rnd(-40, 40));
    dudes.push(d);
  }
  loop();  
}
function loop(){
  //Challenge 5: Make all the dudes jump.

  for(let d of dudes){
    d.jump();
  }
  window.requestAnimationFrame( loop );
}
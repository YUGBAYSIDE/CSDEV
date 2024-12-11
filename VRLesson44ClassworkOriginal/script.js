let rnd = (l,u) => Math.random() * (u-l) + l;
let scene, boxes = [];
window.onload = function(){
  scene = document.querySelector("a-scene");
  breath = document.getElementById("breath");
  
  breath.onclick = function(){
    breath.components.sound.playSound();
  }
  /* Challenge
     Create 10 random boxes through the world
  */
  for(let i=0;i<10;i++){
    boxes.push(new Box(rnd(-10, 10), 0.5, rnd(-10, 10)));
  }

  loop();
}


function loop(){
  /* Challenge 
     Make the boxes blast off
  */
  for(let box of boxes){
    box.blast();
  }
  window.requestAnimationFrame( loop )
  
}
let rnd = (l,u) => Math.random()*(u-l) + l;
let scene, lights=[];
window.onload = function(){
  scene = document.querySelector("a-scene");
  // Challenge: Create 10 random lamps
  for(let i=0;i<10;i++){
    lights.push(new Lamp(rnd(-5, 5), 0, rnd(-5,5)));
  }
}

let rnd = (l,u) => Math.floor(Math.random()*(u-l)+l);
let rocks=[];
window.onload = function(){
  scene = document.querySelector("a-scene");
  
  for(let x = -2; x<3; x+=2){
    rocks.push(new Rock(x, 0.5, -3));
    rocks.push(new Rock(x, 0.5, 3));
  }
  for(let z = -3; z<5; z+=2){
    rocks.push(new Rock(-2, 0.5, z));
    rocks.push(new Rock(2, 0.5, z));
  }
}
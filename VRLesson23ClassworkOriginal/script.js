let scene;
let lava, meteor;
window.onload = function(){
  scene = document.querySelector("a-scene"); //CSS Selector
  lava = document.querySelector("#lava");
  meteor = document.querySelector("#meteor");
  
  //Challenge 1: You will make the lava "plane" rotate. Give the plane an id of "lava". Add variables a and da to lava.  Initialize a to  0 and da to 1.

  //Challenge 2: You will make the meteor fly into the distance. Give the dodadecahron an id of "meteor". Add variables z and dz to meteor.  Initialize z to 10 and dz to -0.1

}

function loop(){
  //Challenge 3: Increase lava's a variable by da. Set lava rotation in the y axis to lava's a value. Use 90 for the x axis and 0 for the z axis.

  //Challenge 4: Increase meteor's z variable by dz. Set meteor position in the z axis to meteor's z value. Use 0 for the x axis and 1 for the y axis.

  window.requestAnimationFrame(loop)
}
let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);

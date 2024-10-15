let scene;
let lava, meteor;
window.onload = function(){
  scene = document.querySelector("a-scene"); //CSS Selector
  lava = document.querySelector("#lava");
  meteor = document.querySelector("#meteor");
  
  //Challenge 1: You will make the lava "plane" rotate. Add variables a and da to lava.  Initialize a to  0 and da to 1.
  lava.a = 0;
  lava.da = 1;
  //Challenge 2: You will make the meteor fly into the distance. Add variables z and dz to meteor.  Initialize z to 10 and dz to -0.1
  meteor.z = 10;
  meteor.dz = -0.1;

  loop();
}

function loop(){
  //Challenge 3: Increase lava's a variable by da. Set lava rotation in the y axis to lava's a value. Use 90 for the x axis and 0 for the z axis.
  lava.a += lava.da;
  lava.setAttribute("rotation",{x:90, y:lava.a, z:0})

  //Challenge 4: Increase meteor's z variable by dz. Set meteor position in the z axis to meteor's z value. Use 0 for the x axis and 1 for the y axis.
  meteor.z += meteor.dz
  meteor.setAttribute("position",{x: 0, y:1, z: meteor.z})

  setTimeout(loop,30)
}
let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);

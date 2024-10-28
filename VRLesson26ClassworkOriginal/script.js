let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, mech, m, mechs = [];

window.onload = function(){
  scene = document.querySelector("a-scene");
  
  mech = document.getElementById("mech-1");

  for(let i = 0;i < 25; i++){
    m = new Mech(rnd(-50, 50), 13, rnd(-50,50));
    mechs.push(m);
  }
 
  loop();
}

function loop(){

  for(let m of mechs){
    m.launch();
  }

  window.requestAnimationFrame( loop );
}

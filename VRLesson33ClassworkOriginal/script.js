let rocketTemplate, rockets = [];

window.onload = function() {
  scene = document.querySelector("a-scene");
  rocketTemplate = document.querySelector("#rocketTemplate")
  for(let x = -10; x < 10; x += 2){
    for(let z = -10; z < 10; z += 2){
      rockets.push(new Rocket(x,0,z))
    } 
  }
  loop();
}
function loop(){
  for(let rocket of rockets){
    rocket.update()
  }
  
  setTimeout(loop,10);
}



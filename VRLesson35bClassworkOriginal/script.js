let rnd = (l,u) => Math.random() * (u-l) + l
let scene, camera, potholes = [], coins = [];
window.onload = function(){
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");
  for(let i = 0; i < 20; i++){
    let x = rnd(-10,10);
    let z = rnd(-10,10);
    coins.push( new Coin(x,z));
  }
  for(let i = 0; i < 10; i++){
    let x = rnd(-10,10);
    let z = rnd(-10,10);
    potholes.push( new Pothole(x,z));
  }
  
  loop();
}
function loop(){
  /* Challenge 1
     Go through all the coins and make them spin.  If the distance 
     between you a coin is less than 1, collect that coin. Hint: 
     Look at the class to figure out to collect the coin.
  */
  for(let coin of coins){
    if(distance(camera, coin.obj) < 1){
      coin.collect();
    }
  }
  /* Challenge 2
     If the distance between you a pothole is less than 1.7, set the camera's drop variable to true. 
  */
  for(let pothole of potholes){
    if(distance(camera, pothole.obj) < 1.7){
      camera.drop = true;
    }
  }
  if(camera.drop){
    camera.object3D.position.y -= 0.025;
  }
 
  window.requestAnimationFrame(loop);
}

function distance(obj1,obj2){
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
  return d;
}
let rnd = (l,u) => Math.random() * (u-l) + l
let scene, camera, balls = [], r, dr;

window.onload = function(){
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");
  gem = document.getElementById("gem");
  r = 0;
  dr = 0.1;
  /* Challenge 1
     When the user clicks in the world, at a new ball to the array
     Note: If you are curious at how the ball moves in the direction you are facing, look at the ball class.
  */
  window.addEventListener("click", function(){
    let x = camera.object3D.position.x;
    let z = camera.object3D.position.z;
    balls.push(new Ball(x, 1, z));
    // console.log(balls.length);
  });
  
  /* Challenge 2
     We will use the keyboard to rotate the gem that is in the world.
     Use i and k to rotate forward and backwards on the x axis.
     Use j and l to rotate left and right on the z axis.
     Note: Take a look at how the gem was created in the HTML. This is
     a preview of Lesson 4.1
  */

  window.addEventListener("keydown", function(e){
    
    if(e.key == "i"){
      r += dr;
      gem.object3D.rotation.x = r;
    }else if(e.key == "k"){
      r -= dr;
      gem.object3D.rotation.x = r;
    }else if(e.key == "j"){
      r += dr;
      gem.object3D.rotation.z = r;
    }else if(e.key == "l"){
      r -= dr;
      gem.object3D.rotation.z = r;
    }
    
  });
  loop();
}

function loop(){
  for(let ball of balls){
    ball.move();
  }
  window.requestAnimationFrame( loop );
}

function rotation(){
  rx += 1;
}
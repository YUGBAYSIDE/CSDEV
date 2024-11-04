let target;

window.onload = function(){
  target = document.querySelector("#target");
  target.a = 0;
  target.da = 1;

  loop();
}

function loop(){
  target.a += target.da;

  if(target.a > 90 || target.a < 0){
    target.da = -target.da;
  }

  target.setAttribute("rotation",{x:target.a, y:0, z: 0});

  window.requestAnimationFrame( loop );
}
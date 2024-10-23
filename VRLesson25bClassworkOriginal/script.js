let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, snowmen = [ ], clouds = [], snowflakes = [];

window.onload = function(){
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 20; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let tree = new Tree(x, 0 , z);
    tree.scale(rnd(1,4));
  }
  
  for(let i = 0; i < 20; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let snowman = new Snowman(x,z);
    snowmen.push(snowman);
  }

  for(let i = 0;i<20;i++){
    let cloud = new Cloud(rnd(-20,20), rnd(5, 20), rnd(-20,20));
    clouds.push(cloud);
  }
  cloud = new Cloud(-5,10,-1);

  for(let i = 0;i < 100; i++){
    let snowflake = new Snowflake(rnd(-20,20), rnd(5, 20), rnd(-20,20));
    snowflakes.push(snowflake);
  }
  loop();
}

function loop(){
  for(let snowman of snowmen){
    snowman.spin();
  }
  cloud.fly();
  for(let c of clouds){
    c.fly();
  }
  for(let s of snowflakes){
    s.fall();
  }
  window.requestAnimationFrame( loop );
}

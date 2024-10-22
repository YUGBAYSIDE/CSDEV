let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, snowman, cloud, snowflake;

window.onload = function(){
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 20; i++){
    let tree = new Tree(rnd(-20,20), 0 , rnd(-20,20));
    tree.scale(rnd(1,4));
  }
  snowman = new Snowman(-5,0);
  cloud = new Cloud(-5,10,-1);
  snowflake = new Snowflake( 0 ,10 ,0);
  loop();
}

function loop(){
  snowman.spin();
  cloud.fly();
  snowflake.fall();
  window.requestAnimationFrame(loop);
}

let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.onload = function(){
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let tree = new Tree(x, 0 , z);
  }
  
   for (let i = 0; i < 10; i++) {
        let x = rnd(-20, 20);
        let y = rnd(5, 10);
        let z = rnd(-20, 20);
        let cloud = new Cloud(x, y, z);
    }

}

let maze = [
  "ToToToToToToToToToToTo",
  "Tox-x------------x----",
  "Tox-xxxxxxxxx-x--x-xxo",
  "To---x--------x--x-xTo",
  "Tox--x-xx-xxx-x--x-xTo",
  "Tox--x-x----x-x--x-xTo",
  "Tox--x-x----x-x--x-xTo",
  "Tox----x-x-x-----x-xTo",
  "Tox-xxxx--x---x--x-xTo",
  "Tox-x----x----x--x-xTo",
  "Tox-x-------xxx-----To",
  "Tox-xoToToToToToToToTo",
];
let scene;
window.onload = function(){
  scene = document.querySelector("a-scene");
  for(let x = 0; x < maze.length; x++){
    let row = maze[x];
    let cols = row.split("");
    for(let z = 0; z < cols.length; z++){
      if(cols[z] == "x"){
        new Block(x,1,z)
      }
      else if(cols[z] == "T"){
        new Tree(x,1,z);
      }else if(cols[z]=="o"){
        new Rock(x,1,z)
      }
    }
    
  }

}
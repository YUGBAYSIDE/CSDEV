class Mech{
  constructor(x, y, z, r){
    this.x = x;
    this.y = y;
    
    let rndSpeed = rnd(1,9);
    this.dy = rndSpeed/100;
    this.z = z;

    this.r = 0;
    this.dr = rnd(-20,20);
    
    this.obj = mech.cloneNode(true);

    this.obj.setAttribute("position", {x:x, y:y, z:z});
    scene.append(this.obj);
  }
  launch(){
    this.y += this.dy;
    this.r += this.dr;
    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    this.obj.setAttribute("rotation", {x:0, y:this.r, z:0});
  }
}
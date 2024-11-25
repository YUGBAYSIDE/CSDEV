class Coin{
  constructor(x,z){
    this.a = rnd(0,2 * Math.PI);
    this.da = 0.025;

    this.obj = document.createElement("a-torus");
    this.obj.setAttribute("color","yellow");
    this.obj.setAttribute("radius",0.5)
    this.obj.setAttribute("radius-tubular",0.1)
    this.obj.setAttribute("position",{x:x,y:1,z:z});
    scene.append(this.obj);
  }
  spin(){
    if(!this.available){
      this.a += this.da;
      this.obj.object3D.rotation.y = this.a;
    }
  }
  collect(){
    this.available = true;
    this.obj.setAttribute("color","white");
  }
}
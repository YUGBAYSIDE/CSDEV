class Ball{
  constructor(){
    this.x = camera.object3D.position.x;
    this.y = 1;
    this.z = camera.object3D.position.z;

    let angle = camera.object3D.rotation.y + Math.PI;
    this.dx = Math.sin(angle) / 10;
    this.dz = Math.cos(angle) / 10;

    this.obj = document.createElement("a-dodecahedron");
    this.obj.setAttribute("radius",0.5);
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    scene.append(this.obj)
  }
  move(){
    this.x += this.dx;
    this.z += this.dz;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    
  }
}
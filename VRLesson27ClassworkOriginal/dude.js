class Dude{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    //Challenge 1: Add delta variables in order to make the dude walk forward on the z axis and jump up and down on the y axis.
    this.dz = rnd(1,10)/100;
    this.dy = rnd(1,5)/100;

    this.obj = dudeTemplate.cloneNode(true);
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    scene.append(this.obj);
  }
  jump(){
    //Challenge 2: Add the accumulators to modify the y and z variables
    this.y += this.dy;
    this.z += this.dz;
    //Challenge 3: Add the decision in order to alternate the delta on the y axis when the dude reaches less then 1 or greater than 2
    if(this.y <= 1 || this.y > 2){
      this.dy = -this.dy;
    }
	if(this.z >= 50 || this.z <= -50){
		this.dz = -this.dz
	}
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    //this.obj.setAttribute("rotation", {x:0,y:90,z:0});
  }
}
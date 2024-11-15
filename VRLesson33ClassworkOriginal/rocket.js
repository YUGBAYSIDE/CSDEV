class Rocket{
  constructor(x,y,z){
    this.x = x;
    this.y = y; 
    this.z = z;
    this.flame = ["red","#FF4500","orange","rgb(248, 213, 104)","yellow", "yellow","rgb(248, 213, 104)","orange","#FF4500","red"];
    this.flameColor = 0;
    this.flameH = 2;
    this.flameDH = 0.1;
    this.dy = 0.05;
   
    this.obj = rocketTemplate.cloneNode(true);
    this.obj.setAttribute("rocket", "");
    this.obj.getChildren()[1].setAttribute("src","#metalTexture");
    /* Challenge 1: Add code to launch the missle when you click on it. By launching we mean move it up the y axis. Hint: Set a flag which can be checked in update()  */
    this.obj.addEventListener("click", ()=>{
      this.fly = true;
    })
    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    scene.append(this.obj)
  }
  update(){
    /* Challenge 2: Update the position of the whole rocket but only if it is "launched"
    Bonus: Add a call to the this.burn() in addition to moving the rocket*/
    if(this.fly){
      this.y += this.dy;
      this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
      this.burn();
    } 
  }
  
  burn(){
    this.flameColor++;
    this.obj.getChildren()[2].setAttribute("color",this.flame[this.flameColor % this.flame.length]);
    this.flameH += this.flameDH;
    if(this.flameH > 3 || this.flameH < 1){
      this.flameDH = -this.flameDH;
    }
    this.obj.getChildren()[2].setAttribute("height",this.flameH);
  }
}
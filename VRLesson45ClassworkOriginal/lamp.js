class Lamp{
  constructor(x,y,z){
    this.strength = 0;
    this.dl = 0.5;
    this.obj = document.createElement("a-entity");
    let pole = document.createElement("a-cylinder");
    pole.setAttribute("radius",0.1);
    pole.setAttribute("height",3);
    // Challenge: Allow the pole to receive shadows
    pole.setAttribute("shadow", {receive:true});
    
    pole.setAttribute("position","0 1.5 0");
    this.obj.append(pole);
    
    this.bulb = document.createElement("a-cone");
    this.bulb.setAttribute("position","0 3 0");
    this.bulb.setAttribute("radius-bottom",0.5);
    /* Challenge: Make the bulb a point light source that can cast a shadow and has an inital intensity of 0
    */
    
    this.bulb.onclick = ()=>{
      this.strength += this.dl;
      this.dl = -this.dl;
      this.bulb.setAttribute("light", {type:"point", intensity:0, castShadow:true});
      // Challenge: Assign the bulb the light intensity represented by the strength
      //console.log(this.strength);
      this.obj.setAttribute("light", {intensity: this.strength});
    }
    
    this.obj.append(this.bulb);
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);

  }
}
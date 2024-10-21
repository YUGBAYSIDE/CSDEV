class Cloud{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
// Create three spheres with slightly overlapping positions
    let sphere1 = document.createElement("a-sphere");
    sphere1.setAttribute("color", "white");
    sphere1.setAttribute("radius", "0.5");
    sphere1.setAttribute("position", `${x} ${y} ${z}`);

    let sphere2 = document.createElement("a-sphere");
    sphere2.setAttribute("color", "white");
    sphere2.setAttribute("radius", "0.5");
    sphere2.setAttribute("position", `${x + 0.2} ${y + 0.2} ${z + 0.2}`);

    let sphere3 = document.createElement("a-sphere");
    sphere3.setAttribute("color", "white");
    sphere3.setAttribute("radius", "0.5");
    sphere3.setAttribute("position", `${x - 0.2} ${y - 0.2} ${z - 0.2}`);

    // Add each sphere to the cloud entity
    this.obj.append(sphere1);
    this.obj.append(sphere2);
    this.obj.append(sphere3);

    // Set the cloud entity's position to the passed-in values
    this.obj.setAttribute("position", `${x} ${y} ${z}`);

    // Add the cloud entity to the scene
    scene.append(this.obj);

  }
}
window.onload = function(){
  //Challenge 1: Create a variable scene for the <a-scene> component in the HTML
	let scene = document.querySelector("a-scene"); 

  //Challenge 2: Create a variable for <a-dodecahedron>
	let dode = document.createElement("a-dodecahedron");
  
  //Challenge 3: Change the <a-dodecahedron>'s position, radius and color
	dode.setAttribute("color","yellow");
	dode.setAttribute("position","-1 2.5 3.3");
	dode.setAttribute("radius","4");
  //Challenge 4: Add the <a-dodecahedron> to the scene
	scene.append( dode )

  /* Challenge Bonus
  1) Use a for loop to create a lot of <a-dodecahedron> 
  2) Change each <a-dodecahedron>'s position to a random x, y, and z location
  3) Change each <a-dodecahedron>'s to a random color.  Hint: Use rgb( ) and string interpolation 
  */
  for (let i = 0; i < 20; i++) { // create 20 dodecahedrons
    let dode = document.createElement("a-dodecahedron");

    // generate random position
    let x = Math.random() * 10 - 5; // random x between -5 and 5
    let y = Math.random() * 10 - 2;
    let z = Math.random() * 10 - 5; // random z between -5 and 5
    dode.setAttribute("position", `${x} ${y} ${z}`);

    // generate random color
    let r = Math.floor(Math.random() * 256); // random red value
    let g = Math.floor(Math.random() * 256); // random green value
    let b = Math.floor(Math.random() * 256); // random blue value
    dode.setAttribute("color", `rgb(${r}, ${g}, ${b})`);
	
	// generate random radius 
	let radios = Math.random() * 2; // random radios!!! 
	dode.setAttribute("radius", radios);

    scene.append(dode); // add the dodecahedron to the scene
  }

}
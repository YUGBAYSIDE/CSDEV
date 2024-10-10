let rnd = (l, u) => Math.floor(Math.random() * (u - l) + l);
let scene;

window.onload = function() {
    scene = document.querySelector("a-scene");

    // Add trees to the scene
    for (let i = 0; i < 100; i++) {
        let x = rnd(-20, 20);
        let y = rnd(-20, 20);
        createTree(x, 0, y);
    }

    // Add clouds to the scene
    for (let i = 0; i < 10; i++) {
        let x = rnd(-20, 20);
        let y = rnd(5, 10);
        let z = rnd(-20, 20);
        createCloud(x, y, z);
    }
}
//Task 2: Use the createCloud(...)  to add several clouds to the scene at various positions.

/* Task1: Create a function createCloud that,
      1) Accept an x, y and z position for where to place the cloud "entity"
      2) Create an entity to store all the components that will make up the cloud
      3) Create three sphere, or some other appropriate component that are slightly overlap.         4) Add each sphere to the cloud entity
      5) Set cloud entities position to those passed in to the function.
      6) Add the cloud entity to the scene
*/
function createCloud(x, y, z) {
    // Create an entity to store all the components that will make up the cloud
    let cloud = document.createElement("a-entity");

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
    cloud.append(sphere1);
    cloud.append(sphere2);
    cloud.append(sphere3);

    // Set the cloud entity's position to the passed-in values
    cloud.setAttribute("position", `${x} ${y} ${z}`);

    // Add the cloud entity to the scene
    scene.append(cloud);
}



function createTree(x, y, z) {
    let tree = document.createElement("a-entity");

    let pines = document.createElement("a-cone");
    pines.setAttribute("color", "green");
    pines.setAttribute("position", "0 2 0");
    pines.setAttribute("height", "2");
    tree.append(pines);

    let stump = document.createElement("a-cylinder");
    stump.setAttribute("position", "0 1 0");
    stump.setAttribute("color", "brown");
    stump.setAttribute("radius", "0.25");
    tree.append(stump);

    tree.setAttribute("position", {
        x: x,
        y: y,
        z: z
    });
    scene.append(tree)
}
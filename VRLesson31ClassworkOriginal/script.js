window.onload = function() {
  //Task 3: Create a variable for the cylinder.  Get the element from the HTML
  let myBox = document.querySelector("#myBox");
  let myCylinder = document.querySelector("#myCylinder");
  let mySphere = document.querySelector("#mySphere");
  //Task 4: Add another event to set the height of myBox back to 1 when the mouse is no longer on myBox
  myBox.addEventListener("mouseenter", function(){
    this.setAttribute("height", 2);
  });

  myBox.addEventListener("mouseleave", function(){
    this.setAttribute("height", 1);
  });

  //Task 5: Make  the the cylinder disappear when you click on it.  Set opacity to zero

  myCylinder.addEventListener("click", function(){
    this.setAttribute("opacity", 0);
  })

}

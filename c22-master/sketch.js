
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.

 
var boxes = [];
var gSlider;

var ground,box;

var myDebug=10;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
 
 
function setup() {
    createCanvas(400, 400);

    engine = Engine.create();
    world = engine.world;
// Create an instance of Engine, World
 
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
    // Create a ground rectangle that would hold all the boxes and add it to the world.
    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,200,400,10,ground_options);
    World.add(world,ground);
    
    box = Bodies.rectangle(mouseX,mouseY,10,10);
    World.add(world,box);
   // <script src="https://unpkg.com/matter-js@0.14.2/build/matter.min.js"></script>
}
 

 
function draw() {
    // Draw all the elements including the slider that 
    
    background("grey");
    Engine.update(engine);
    rectMode(CENTRE);
    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
    rect(100,100,50,50)
    rect(box.position.x,box.position.y,random(10,30),random(10,30));
    rect(ground.position.x,ground.position.y,400,10)

    // Use a for loop to show all the boxes
    //mousePressed();

}
 
/*function mousePressed() {  

    if (mouseY < 350 ) {
        // Every time a mouse press occures create a new box.
        rect(box.position.x,box.position.y,random(10,30),random(10,30));
    }
} */

/* You can either create a file for the class Box or build a simple function that creates one box at a time.
// I have gone for the second option.
function Box(x, y, w, h, options) {

    // add options such as friction and restitution. Experiment with the values
    var options = {

    }
 
    // create your box using the function arguments
    // x - x-coordinate
    // y - y-coordinate
    // w - width of the box
    // h - height of the box

 

    // Create a show method which will draw the box every time it is called inside the draw method.
    // remember to push and pop.
    this.show = function () {
    }
} */

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world;
var ground,ball, box1,box2;

function setup() {

  createCanvas(800,400);
  engine= Engine.create();
  world = engine.world;
box1 = new Box(215,210);
box2 = new Box(200,250);
  ground = new Ground();

 
}

function draw() {
  background("blue");  
  Engine.update(engine);
  
 box1.display();
 box2.display();
ground.display();

}
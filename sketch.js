
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ball, ground, bin;


function setup() {
 var canvas = createCanvas(400,400);

	engine = Engine.create();
  world = engine.world;
  
  ball = new Paper_Ball(50,200,40,40);

  ground = new Ground(200,385,400,10);

  bin = new Bin(350,380,50,80);


}

function draw() {
 background("white");

  Engine.update(engine); 
	
  rectMode(CENTER);
  background(0);

  ball.display();
  ground.display();
  bin.display();


}




// Namespacing - To shorten names

const World = Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var world, engine;

var box;

var ground;

var ball;


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;


  var options = {
    restitution: 1
  }
  box = Bodies.rectangle(400,200,50,50,options);
  World.add(world,box);

  ball = Bodies.circle(100,100,20,options);
  World.add(world,ball);


  var ground_options = {
    isStatic: true
  }
  ground = Bodies.rectangle(400,380,800,20,ground_options);
  World.add(world,ground);

  console.log(ground);
  
  
}

function draw() {
  background(0); 
  Engine.update(engine);
  
  rectMode(CENTER);
  //console.log(box.position);

  fill("yellow")
  rect(box.position.x,box.position.y,50,50);

  fill("brown");
  rect(ground.position.x,ground.position.y,800,20);

  ellipseMode(RADIUS);
  fill("aqua");
  ellipse(ball.position.x,ball.position.y,20,20);
  


}
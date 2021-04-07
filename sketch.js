
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



roofObject = new Roof(width / 2,height / 4,width / 4,20);

var bobDia = 40;

var middleBobPosX = width/2
var middleBoxPosY = 300;
bob1 = newBob(middleBobPosX - bobDia * 2, middleBobPosY, bobDia);
bob2 = newBob(middleBobPosX - bobDia , middleBobPosY, bobDia);
bob3 = newBob(middleBobPosX, middleBobPosY, bobDia);
bob4 = newBob(middleBobPosX + bobDia , middleBobPosY, bobDia);
bob5 = newBob(middleBobPosX + bobDia * 2, middleBobPosY, bobDia);

rope1 = newRope(bob1.body, roofObject.body, -bobDia * 2,0);
rope2 = newRope(bob2.body, roofObject.body, -bobDia * 1,0);
rope3 = newRope(bob3.body, roofObject.body, 0,0);
rope4 = newRope(bob4.body, roofObject.body, bobDia * 1,0);	
rope5 = newRope(bob5.body, roofObject.body, bobDia * 2,0);










function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,roofObject
var rope1,rope2,rope3,rope4,rope5;
var world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     roofObject=new roof(width/2,175,229,20);

	 bobDiameter=40;

	 startBobPositionX=width/2;
	 startBobPositionY=675;
	 bobObject1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	 bobObject2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	 bobObject3=new bob(startBobPositionX,startBobPositionY,bobDiameter);
	 bobObject4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	 bobObject5=new bob(startBobPositionX+bobDiamter*2,startBobPositionY,bobDiameter);

 

	rope1=new rope(bobObject1.body,roofObject.body,-bobDiamter*2, 0);
	
	rope2=new rope(bobObject2.body,roofObject.body,-bobDiameter, 0);
	rope3=new rope(bobObject3.body,roofObject.body,0, 0);
	rope4=new rope(bobObject4.body,roofObject.body,bobDiameter, 0);
	rope5=new rope(bobObject5.body,roofObject.body,bobDiameter*2, 0);

  

	Engine.run(engine);
  


}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}




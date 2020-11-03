
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint=Matter.MouseConstraint;
var world,engine,cavnas;
var Pendulum1,Pendulum2,Pendulum3,Pendulum4,Pendulum5;
var sling1,sling2,sling3,sling4,sling5;
var mConstraint;



function preload()
{
	
}

function setup() {
	canvas=createCanvas(windowWidth/2,windowHeight/1.5);


	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio=pixelDensity();
	let options={
		mouse: canvasmouse
	};
	mConstraint = MouseConstraint.create(engine,options);
	World.add(world,mConstraint);

	//Create the Bodies Here.
	  
	  Pendulum1=new Pendulum(200,200,"#00b0ff");
	  Pendulum2=new Pendulum(260,200,"#00b0ff");
	  Pendulum3=new Pendulum(320,200,"#00b0ff");
	  Pendulum4=new Pendulum(380,200,"#00b0ff");
	  Pendulum5=new Pendulum(440,200,"#00b0ff");


	  sling1=new Sling(Pendulum1.body,{x:200,y:70});
	  sling2=new Sling(Pendulum2.body,{x:260,y:70});
	  sling3=new Sling(Pendulum3.body,{x:320,y:70})
	  sling4=new Sling(Pendulum4.body,{x:380,y:70})
	  sling5=new Sling(Pendulum5.body,{x:440,y:70})



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

 Engine.update(engine);
   
 sling1.display();
sling2.display();
sling3.display();
sling4.display();
sling5.display();
 Pendulum1.display();
 Pendulum2.display();
 Pendulum3.display();
 Pendulum4.display();
 Pendulum5.display();

}

function mouseDragged() {
	Matter.Body.setPosition(pendulum1.body,{x:mouseX,y:mouseY})
	}


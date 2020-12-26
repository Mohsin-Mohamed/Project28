
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone,sling
var mango
var gameState = "onSling";

function preload()
{
	treeImg=loadImage("sprites/tree.png")
	boyImg=loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(1200, 600);
	var boy=createSprite(200,500,10,10)
	boy.addImage(boyImg)
	boy.scale = 0.15
	var tree=createSprite(900,300,10,10)
	tree.addImage(treeImg)
	tree.scale = 0.5
	engine = Engine.create();
	world = engine.world;

	ground=new Ground(1000,600,2000,50)
	stone=new Stone(125,420,50,50)
	sling=new SlingShot(stone.body,{x:125,y:420})
	mango1=new Mango(910,50,40,40)
	mango2=new Mango(950,90,40,40)
	mango3=new Mango(980,160,40,40)
	mango4=new Mango(970,200,40,40)
	mango5=new Mango(800,250,40,40)
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background(235);
  drawSprites();
  //Bodies
  ground.display()
  sling.display() 
  stone.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  detectCollisition(stone,mango1)
  detectCollisition(stone,mango2)
  detectCollisition(stone,mango3)
  detectCollisition(stone,mango4)
  detectCollisition(stone,mango5)
 
}
function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    //}
}

function mouseReleased(){
	sling.fly();
	gameState = "launched";
}


function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(stone.body,{x:125,y:420})
        sling.attach(stone.body);
    }
}

function detectCollisition(lstone1,lmango1)
{ lstone=lstone1.body.position;
	 lmango=lmango1.body.position;
	  if(lstone.x-lmango.x < (lstone1.width+lmango1.width)/2 && lmango.x-lstone.x < (lstone1.width+lmango1.width)/2 && lstone.y-lmango.y < (lstone1.height+lmango1.height)/2 && lmango.y-lstone.y < (lstone1.height+lmango1.height)/2 ){
		   Matter.Body.setStatic(lmango1.body,false); 
		} 
	}

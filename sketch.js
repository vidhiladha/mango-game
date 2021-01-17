
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,height,1200,20);
	tree = new Tree(520,450,600,650);
	mango1 = new Mango(570,300.50,50);
	mango2 = new Mango(450,300.50,50);
	mango3 = new Mango(690,300.50,50);
	mango4 = new Mango(450,200.50,50);
	mango5 = new Mango(300,350.50,50);

	boy = new Boy(200,660,90,90);
	stone1 = new Stone(150,600,30,30);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  boy.display();
  stone1.display();


  drawSprites();
 
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wallHeight = 300;
var walls=[];
var particles = [];
var plinkos = [];

var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	for(var k = 0;k<=width;k=k+80) {
		walls.push(new Wall(k,height-wallHeight/2,10,wallHeight));
		  }

		  for(var p = 40;p<=width;p=p+50) {
			plinkos.push(new Plinkos(p,75,10));
			  }

			  for(var a = 15;a<=width-10;a=a+50) {
				plinkos.push(new Plinkos(a,175,10));
				  }

				  for(var y = 15;y<=width-10;y=y+50) {
					plinkos.push(new Plinkos(y,275,10));
					  }

					  for(var h = 15;h<=width-10;h=h+50) {
						plinkos.push(new Plinkos(h,375,10));
						  }

ground = new Wall(350,698,800,10)
World.add(world,ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black"); 
  
  for(var i = 0; i<walls.length;i++){
walls[i].display();
  }

  for(var l = 0; l<plinkos.length;l++){
	plinkos[l].display();
	  }

  if(frameCount%60 == 0){


particles.push(new Particles(random(200,600),10,10,10))
  }
  
  for(var j = 0; j<particles.length;j++){
	particles[j].display();
	  }

  drawSprites();
 
}




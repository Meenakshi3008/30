const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;

function preload(){
}

function setup() {
  createCanvas(1280, 689);
  engine = Engine.create();
	world = engine.world;
  Engine.run(engine);
  ground = new Ground(displayWidth/2, 670, displayWidth, 60);
  stand1 = new Ground(550, 500, 220, 10);
  stand2 = new Ground(950, 350, 190, 10);

  box1 = new Box(460, 480, 30, 30);
  box2 = new Box(490, 480, 30, 30);
  box3 = new Box(520, 480, 30, 30);
  box4 = new Box(550, 480, 30, 30);
  box5 = new Box(580, 480, 30, 30);
  box6 = new Box(610, 480, 30, 30);
  box7 = new Box(640, 480, 30, 30);
  box8 = new Box(475, 450, 30, 30);
  box9 = new Box(505, 450, 30, 30);
  box10 = new Box(535, 450, 30, 30);
  box11 = new Box(565, 450, 30, 30);
  box12 = new Box(595, 450, 30, 30);
  box13 = new Box(625, 450, 30, 30);
  box14 = new Box(490, 420, 30, 30);
  box15 = new Box(520, 420, 30, 30);
  box16 = new Box(550, 420, 30, 30);
  box17 = new Box(580, 420, 30, 30);
  box18 = new Box(610, 420, 30, 30);
  box19 = new Box(505, 390, 30, 30);
  box20 = new Box(535, 390, 30, 30);
  box21 = new Box(565, 390, 30, 30);
  box22 = new Box(595, 390, 30, 30);
  box23 = new Box(520, 360, 30, 30);
  box24 = new Box(550, 360, 30, 30);
  box25 = new Box(580, 360, 30, 30);
  box26 = new Box(535, 330, 30, 30);
  box27 = new Box(565, 330, 30, 30);
  box28 = new Box(550, 300, 30, 30);

  Box1 = new Box(875, 330, 30, 30);
  Box2 = new Box(905, 330, 30, 30);
  Box3 = new Box(935, 330, 30, 30);
  Box4 = new Box(965, 330, 30, 30);
  Box5 = new Box(995, 330, 30, 30);
  Box6 = new Box(1025, 330, 30, 30);
  Box7 = new Box(890, 300, 30, 30);
  Box8 = new Box(920, 300, 30, 30);
  Box9 = new Box(950, 300, 30, 30);
  Box10 = new Box(980, 300, 30, 30);
  Box11 = new Box(1010, 300, 30, 30);
  Box12 = new Box(905, 270, 30, 30);
  Box13 = new Box(935, 270, 30, 30);
  Box14 = new Box(965, 270, 30, 30);
  Box15 = new Box(995, 270, 30, 30);
  Box16 = new Box(920, 240, 30, 30);
  Box17 = new Box(950, 240, 30, 30);
  Box18 = new Box(980, 240, 30, 30);
  Box19 = new Box(935, 210, 30, 30);
  Box20 = new Box(965, 210, 30, 30);
  Box21 = new Box(950, 180, 30, 30);
 
  ball = new Box(200, 350, 40, 40);

  slingShot = new SlingShot(ball.body, {x: 200, y: 350});
  //slingShot.shapecolor="black";
}

function draw() {
  background("black");

  textSize(20);
  textFont("Georgia")
  fill(136, 187, 228);
  text("Drag the Dark Blue Rectangular Stone and Release it, to launch it towards the blocks", 100, 30);

  strokeWeight(1);
  fill(174, 198, 207);
  ground.display();

  fill(153, 138, 211);
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill(250, 154, 162);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  fill(255, 180, 178);
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  fill(255, 248, 193);
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  fill(226, 260, 203);
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  fill(191, 234, 215)
  box23.display();
  box24.display();
  box25.display();
  fill(198, 242, 255)
  box26.display();
  box27.display();
  fill(199, 206, 234);
  box28.display();

  fill(251, 185, 127);
  Box1.display();
  Box2.display();
  Box3.display();
  Box4.display();
  Box5.display();
  Box6.display();
  fill(253, 208, 107);
  Box7.display();
  Box8.display();
  Box9.display();
  Box10.display();
  Box11.display();
  fill(249, 229, 199);
  Box12.display();
  Box13.display();
  Box14.display();
  Box15.display();
  fill(195, 237, 197);
  Box16.display();
  Box17.display();
  Box18.display();
  fill(134, 283, 230);
  Box19.display();
  Box20.display();
  fill(127, 187, 242);
  Box21.display();

  fill(119, 158, 203);
  ball.display();

  slingShot.display();

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}
function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(ball.body);
  }
}


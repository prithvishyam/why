const Engine = Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var ground
var polyImage
function preload(){
 polyImage=loadImage("polygon.png")   
}

function setup(){
    createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    ground=new Ground();

    stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);

    b1=new Block(300,275,30,40)
    b2=new Block(330,275,30,40)
    b3=new Block(360,275,30,40)
    b4=new Block(390,275,30,40)
    b5=new Block(420,275,30,40)
    b6=new Block(450,275,30,40)
    b7=new Block(480,275,30,40)
    b8=new Block(330,235,30,40)
    b9=new Block(360,235,30,40)
    b10=new Block(390,235,30,40)
    b11=new Block(420,235,30,40)
    b12=new Block(450,235,30,40)
    b13=new Block(360,195,30,40)
    b14=new Block(390,195,30,40)
    b15=new Block(420,195,30,40)
    b16=new Block(390,155,30,40)

    blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);
  //level two
  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);
  //top
  blocks9 = new Block(700,95,30,40);
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}

function draw(){
    background("blue")
    textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
  ground.display();

  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);

  fill("black")
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  fill("green")
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  fill("red")
  b13.display();
  b14.display();
  b15.display();
  fill("orange")
  b16.display();

  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("pink")
  blocks9.display();

  fill("gold");
  imageMode(CENTER)
  image(polyImage ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    slingShot.fly();
  }
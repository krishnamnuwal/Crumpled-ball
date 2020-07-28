const Engine=Matter.Engine;
const World=Matter.World;
const Body=Matter.Body;
const Bodies=Matter.Bodies;


var dustbin1,paper,roomImg,dustbin2,dustbin3,ground,paper;

function preload(){
roomImg=loadImage("room2.jpg")

}

function setup(){
    var canvas =createCanvas(1200,800);

    engine=Engine.create();
    world=engine.world;

    dustbin1=new Dustbin(980,740,200,15);
    dustbin2=new Dustbin(887,655,15,160);
    dustbin3=new Dustbin(1072,655,15,160);
    ground= new Ground(600,750,1200,15)
    paper= new Paper();
  

}

function draw(){
    background(roomImg);
    fill("red")
    textFont("Segoe UI Black");
    textSize(30);
    text("THROW BALL IN DUSTBIN",340,300)
    text("BY USING UP ARROW KEY",350,350);

    Engine.update(engine);
    dustbin1.display();
    dustbin2.display();
    dustbin3.display();
    ground.display();
    paper.display();

 

}

function keyPressed(){
    if(keyCode===UP_ARROW){

        Matter.Body.applyForce(paper.body,paper.body.position,{x:150,y:-150})
    
    }
    

}

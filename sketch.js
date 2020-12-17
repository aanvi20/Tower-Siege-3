
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1
var ground2, ground3, ground4, ground5, ground6
var backgroundIMG
var timesupIMG

//Stack 1
var block1
var block2, block3
var block4, block5, block6
var block7, block8, block9, block10
var block11, bclock12, block13, block14, block15

//Stack 2
var block16
var block17, block18
var block19, block20, block21
var block22, block23, block24, block25
var block26, block27, block28, block29, block30

//Stack 3
var block31
var block32, block33
var block34, block35, block36
var block37, block38, block39, block40
var block41, block42, block43, block44, block45

//Stack 4
var block46
var block47, block48
var block49, block50, block51
var block52, block53, block54, block55
var block56, block57, block58, block59, block60

//Stack 5
var block61
var block62, block63
var block64, block65, block66
var block67, block68, block69, block70
var block71, block72, block73, block74, block75

var  redP
var  red_Sling


var colour

var time
var gameState
var gamer = "onSling"
var score = 0;
var bg = "background.gif";

function preload()
{
  getBackgroundImg();
  
   timesupIMG = loadImage("unnamed.jpg")
}

function setup() {
	createCanvas(3000, 700);
   

	engine = Engine.create();
	world = engine.world;




  

	//Create the Bodies Here.
	
  ground1 = new Ground(1500, 690, 4000, 50)
  
  ground2 = new Ground(500, 500, 300, 30)
  ground3 = new Ground(1000, 500, 300, 30)
  ground4 = new Ground(1500, 500, 300, 30)
  ground5 = new Ground(2000, 500, 300, 30)
  ground6 = new Ground(2500, 500, 300, 30)

  block1 = new Block(500, 370, 50, 50)

  block2 = new Block(480, 390, 50, 50)
  block3 = new Block(520, 390, 50, 50)

  block4 = new Block(460, 410, 50, 50)
  block5 = new Block(500, 410, 50, 50)
  block6 = new Block(540, 410, 50, 50)

  block7 = new Block(430, 440, 50, 50)
  block8 = new Block(470, 440, 50, 50)
  block9 = new Block(520, 440, 50, 50)
  block10 = new Block(570, 440, 50, 50)

  block11 = new Block(400, 470, 50, 50)
  block12 = new Block(450, 470, 50, 50)
  block13 = new Block(500, 470, 50, 50)
  block14 = new Block(550, 470, 50, 50)
  block15 = new Block(600, 470, 50, 50)
	


  block16 = new Blue_Block(1000, 390, 50, 50)

  block17 = new Blue_Block(980, 410, 50, 50)
  block18 = new Blue_Block(1010, 410, 50, 50)

  block19 = new Blue_Block(960, 440, 50, 50)
  block20 = new Blue_Block(1000, 440, 50, 50)
  block21 = new Blue_Block(1030, 440, 50, 50)

  block22 = new Blue_Block(940, 470, 50, 50)
  block23 = new Blue_Block(970, 470, 50, 50)
  block24 = new Blue_Block(1020, 470, 50, 50)
  block25 = new Blue_Block(1060, 470, 50, 50)

  //block26 = new Blue_Block(910, 470, 50, 50)
  //block27 = new Blue_Block(950, 470, 50, 50)
  //block28 = new Blue_Block(1000, 470, 50, 50)
  //block29 = new Blue_Block(1050, 470, 50, 50)
  //block30 = new Blue_Block(1070, 470, 50, 50)


  block31 = new Green_Block(1500, 410, 50, 50)

  block32 = new Green_Block(1480, 440, 50, 50)
  block33 = new Green_Block(1510, 440, 50, 50)

  block34 = new Green_Block(1460, 470, 50, 50)
  block35 = new Green_Block(1500, 470, 50, 50)
  block36 = new Green_Block(1530, 470, 50, 50)

 // block37 = new Green_Block(1440, 440, 50, 50)
 // block38 = new Green_Block(1470, 440, 50, 50)
 // block39 = new Green_Block(1520, 440, 50, 50)
 // block40 = new Green_Block(1560, 440, 50, 50)

 // block41 = new Green_Block(1410, 470, 50, 50)
 // block42 = new Green_Block(1450, 470, 50, 50)
 // block43 = new Green_Block(1500, 470, 50, 50)
 // block44 = new Green_Block(1550, 470, 50, 50)
 // block45 = new Green_Block(1570, 470, 50, 50)

  
  
  block46 = new Red_Block(2000, 390, 50, 50)

  block47 = new Red_Block(1980, 410, 50, 50)
  block48 = new Red_Block(2010, 410, 50, 50)

  block49 = new Red_Block(1960, 440, 50, 50)
  block50 = new Red_Block(2000, 440, 50, 50)
  block51 = new Red_Block(2030, 440, 50, 50)

  block52 = new Red_Block(1940, 470, 50, 50)
  block53 = new Red_Block(1970, 470, 50, 50)
  block54 = new Red_Block(2020, 470, 50, 50)
  block55 = new Red_Block(2060, 470, 50, 50)

 // block56 = new Red_Block(1910, 470, 50, 50)
 // block57 = new Red_Block(1950, 470, 50, 50)
 // block58 = new Red_Block(2000, 470, 50, 50)
 // block59 = new Red_Block(2050, 470, 50, 50)
 // block60 = new Red_Block(2070, 470, 50, 50)

  
  block61 = new Purple_Block(2500, 370, 50, 50)

  block62 = new Purple_Block(2480, 390, 50, 50)
  block63 = new Purple_Block(2510, 390, 50, 50)

  block64 = new Purple_Block(2460, 410, 50, 50)
  block65 = new Purple_Block(2500, 410, 50, 50)
  block66 = new Purple_Block(2530, 410, 50, 50)

  block67 = new Purple_Block(2440, 440, 50, 50)
  block68 = new Purple_Block(2470, 440, 50, 50)
  block69 = new Purple_Block(2520, 440, 50, 50)
  block70 = new Purple_Block(2560, 440, 50, 50)

  block71 = new Purple_Block(2410, 470, 50, 50)
  block72 = new Purple_Block(2450, 470, 50, 50)
  block73 = new Purple_Block(2500, 470, 50, 50)
  block74 = new Purple_Block(2550, 470, 50, 50)
  block75 = new Purple_Block(2570, 470, 50, 50)

  

  redP = new Red_Polygon(260, 400, 50, 50)
  red_Sling = new Sling(redP.body, {x:260, y:300})

 
 time = 60
 gameState = "play"

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  if(frameCount % 10 === 0){
    time = time - 1
  }

  if(time === 0){
    background(timesupIMG)
    colour = 7
    gameState = "over"
   }
 


  
  if(gameState === "play"){
    if(backgroundIMG){
  background(backgroundIMG);

    }

  
  drawSprites();

  

 
  
  
  strokeWeight(8)
  stroke("white")
  fill("black")
  textSize(100)
  text("Tower Siege", 1300, 100)
  strokeWeight(2)
  textSize(40)
  text("Break the tower!!", 1400, 150)

 
  text("Timer: " + time, 50, 80)
  text("Score: " + score, 350, 80)
  
 
  
  ground1.display();

  ground2.display();
  ground3.display();
  ground4.display();
  ground5.display();
  ground6.display();

  block1.display();

  block2.display();
  block3.display();

  block4.display();
  block5.display();
  block6.display();

  block7.display();
  block8.display();
  block9.display();
  block10.display();

  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();

  
  block16.display();

  block17.display();
  block18.display();

  block19.display();
  block20.display();
  block21.display();

  block22.display();
  block23.display();
  block24.display();
  block25.display();

  //block26.display();
  //block27.display();
  //block28.display();
  //block29.display();
  //block30.display();


  block31.display();

  block32.display();
  block33.display();

  block34.display();
  block35.display();
  block36.display();

 // block37.display();
 // block38.display();
 // block39.display();
 // block40.display();

 // block41.display();
 // block42.display();
 // block43.display();
 // block44.display();
 // block45.display();

  
  block46.display();

  block47.display();
  block48.display();

  block49.display();
  block50.display();
  block51.display();

  block52.display();
  block53.display();
  block54.display();
  block55.display();

 // block56.display();
 // block57.display();
 // block58.display();
 // block59.display();
 // block60.display();

  
  block61.display();

  block62.display();
  block63.display();

  block64.display();
  block65.display();
  block66.display();

  block67.display();
  block68.display();
  block69.display();
  block70.display();

  block71.display();
  block72.display();
  block73.display();
  block74.display();
  block75.display();

  
  redP.display();
  red_Sling.display();
  

  }


  
  
 
}






function mouseDragged(){
  if (gamer!=="launched"){
    Matter.Body.setPosition(redP.body, {x: mouseX , y: mouseY});
}
  }


  
function mouseReleased(){
	  red_Sling.fly();
    gamer = "launched";
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(redP.body, {x: 200 , y: 50})
    red_Sling.attach(redP.body)
  }
}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      bg = "background.gif";
  }
  else{
      bg = "background2.gif";
  }

  backgroundImg = loadImage(bg);
  //console.log(backgroundImg);
}









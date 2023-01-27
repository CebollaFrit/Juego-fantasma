var towerImg, tower;
var doorImg, doorsGroup;
var climberImg, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup;
var gameState = "play"; 


function preload() {
  towerImg = loadImage("tower.png")
  doorImg =  loadImage("door.png")
  climberImg = loadImage("climber.png")
  ghostImg = loadImage("ghost-standing.png")

  spooky = loadSound("spooky.wav");

 }

function setup() {
  createCanvas(600, 600);

  tower = createSprite( 300,300)
  tower.addImage("tower", towerImg)
  tower.velocityY = 1;

  ghost = createSprite( 200,200, 50, 50);
  ghost.addImage ("ghost", ghostImg)  
  ghost.scale = 0.3

  climbersGroup = new Group();
  doorsGroup = new Group();
  invisibleBlockGroup = new Group();
  
}


function draw() {
  background("black");

  if (gameState === "play"){
  

   if(keyDown("left_arrow")) {
     ghost.velocityX = -3;
   } 
             
   if(keyDown("righ  t_arrow")) {
     ghost.velocityX = 3;
   } 

   if(keyDown("space")) {
    ghost.velocityY = -10;

   } 

   ghost.velocityY = ghost.velocityY + 0.8;
    
   if(tower.y > 400){
    tower.y = 300;
   }

   spawnDoors();
   drawSprites();
  }

}

function spawnDoors(){
  
  if(frameCount % 89 === 0 ){
  var door = createSprite(200, 10 ,)
  var climber = createSprite(200, 10)
  var invisibleblock = createSprite(200, 10)

  invisibleblock.width = climber.width;
  invisibleblock.heigth = 2;

  door.addImage("door", doorImg)
  climber.addImage("climber", climber)
  
  door.velocityY = 1;
  climber.velocityY = 1;
  invisibleblock.velocityY = 1;

  ghost.depth = door.depth;
  door.depth = 1;

  door.lifetime = 600;
  climber.lifetime = 600;
  invisibleblock.lifetime = 600;

  doorsGroup.add(door)
  invisibleBlockGroup.add(invisibleblock)
  climbersGroup.add(climber)

  invisibleblock.debug = true
  }

  
}


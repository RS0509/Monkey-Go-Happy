//everything seems to be working except the background-Riddhima

var bananaImage, obstacleImage, obstacleGroup, bananaGroup, back, score = 0, backgroundImage, player_running, player;

function preload() {
  backgroundImage = loadImage("jungle.png");
  player_running = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
}

function setup() {
  createCanvas(400,400);
  background("white")
  
  back = createSprite(800,200);
  back.velocityX = -4;
  back.addImage(backgroundImage);
  back.x = back.width/2;
  back.scale = 1.5;

    
  ground = createSprite(400,300,800,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.visible = false;
  
  
  player = createSprite(50,275);
  player.addAnimation("running",player_running);
  player.scale=0.1;
  
  obstacleGroup = new Group();
  bananaGroup = new Group();
}

function draw() {

  if(back.x <100)
  {
    back.x = back.width/2;
  }  
  
  if(ground.x <0)
  {
   ground.x = ground.width/2; 
  }
  
  if(keyDown("space"))
  {
   player.velocityY = -5; 
  }
  
  player.velocityY = player.velocityY + 0.8;
              
  if(player.isTouching(bananaGroup))
  {
   score = score+2;
   bananaGroup.destroyEach();
  }
  
  player.collide(ground);
  
  switch(score)
  {
    case 10: player.scale = 0.12;
      break;
    case 20: player.scale = 0.14;
      break;
    case 30: player.scale = 0.16;
      break;
    case 40: player.scale = 0.18;
      break;
    default: break;
  }
  
  if(obstacleGroup.isTouching(player))
  {
   player.scale = 0.1; 
  }
    
  food();
  obstacle();
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score, 200,45);
}
function food() {
  if(frameCount %80 ==0){
   var banana = createSprite(400,300);
   banana.y = random(120,200);
   banana.addImage(bananaImage);
   banana.scale = 0.05;
   banana.velocityX = -5;
   banana.lifetime = 80;
   bananaGroup.add(banana);
  }
}
function obstacle() {
  if(frameCount %300 ==0){
    var obstacles = createSprite(350,300);
    obstacles.addImage(obstacleImage);
    obstacles.scale = 0.15;
    obstacles.velocityX = -5;
    obstacles.lifetime = 70;
    obstacleGroup.add(obstacles);
  }
}
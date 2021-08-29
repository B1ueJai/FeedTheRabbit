var garden,rabbit;
var gardenImg,rabbitImg;
var apples, applesImg;
var leaves, leavesImg;
var select_sprites;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applesImg = loadImage("apple.png");
  leavesImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

//creating rabbit
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  // Move rabbit to mouse X position
  rabbit.x = World.mouseX;

  select_sprites = Math.round(random(1,2));
  // To show apples and leaves randomly by calling functions
  if(frameCount % 80 == 0) {
    if(select_sprites == 1) {
      createApples();
    }
    else {
      createLeaves();
    }
  }
  drawSprites();
}

// To create apples at random positions
function createApples(){

  apples = createSprite(random(50,350),50,40,10);
  apples.addImage("apples", applesImg);
  apples.velocityY = 4;
  apples.scale = 0.08;
  apples.lifetime = 400;
  
}

// To create leaves at random positions
function createLeaves(){
 
  leaves = createSprite(random(50,350),50,40,10);
  leaves.addImage("leaves", leavesImg);
  leaves.velocityY = 4;
  leaves.scale = 0.1;
  leaves.lifetime = 400;
  
}
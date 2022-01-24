
var asteroidGroup,asteroidImg
var spaceship,spaceshipImg
var bg,bgImg





function preload() {
 bgImg = loadImage("background.png")
 spaceshipImg = loadImage("ship.png")
 asteroidImg = loadImage("asteroid.png")

 

}

function setup() {
  createCanvas(800,800);
  bg = createSprite(400,400)
  bg.addImage(bgImg)
  bg.scale = 2

  spaceship = createSprite(400,700,10,10)
  spaceship.addImage(spaceshipImg)

  asteroidGroup = new Group();
  
  
  
 
}

function draw() {

  background("black");
  drawSprites();

  
    spaceship.x = mouseX;
    spaceship.y = mouseY;

    spawnAsteroids();

    if(spaceship.isTouching(asteroidGroup)){
      spaceship.destroy();

     
    }

    
  

  

  
}

function spawnAsteroids() {
  if (frameCount % 60 === 0) {
     asteroid = createSprite(600,100,40,10);
    asteroid.x = Math.round(random(100,700));
    asteroid.addImage(asteroidImg);
    asteroid.scale = 0.2;
    asteroid.velocityY = 3;
    asteroidGroup.add(asteroid);
  }
  
  
}
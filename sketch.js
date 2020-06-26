var moverect,fixrect;

function setup() {
  createCanvas(1200,800);
  moverect=createSprite(400,800,80,30);
  fixrect=createSprite(400,100,50,80);
  fixrect.shapeColor="green";
  moverect.shapeColor="green";
  moverect.debug=true;
  fixrect.debug=true;
  fixrect.velocityY = 5;
  moverect.velocityY = -2;
}

function draw() {
  background(255,255,255);
  
  if(moverect.x-fixrect.x < moverect.width/2 + fixrect.width/2 &&
    fixrect.x-moverect.x < moverect.width/2 + fixrect.width/2 ){
      moverect.velocityX = (-1)* moverect.velocityX;
      fixrect.velocityX = (-1)* fixrect.velocityX;
      
    }
  if(moverect.y-fixrect.y < moverect.height/2 + fixrect.height/2 &&
    fixrect.y-moverect.y < moverect.height/2 + fixrect.height/2) {
      moverect.velocityY = (-1)* moverect.velocityY;
      fixrect.velocityY = (-1)* fixrect.velocityY;

  }
 

  
  drawSprites();
}
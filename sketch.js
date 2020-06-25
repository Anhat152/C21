var fixedRect,movingRect,object1,object2,object3,object4,object5,object6



function setup() {
createCanvas(1200,600);
 fixedRect=createSprite(200, 200, 30, 80);
  movingRect=createSprite(100,100,80,30);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect.debug=true;
  object1=createSprite(100,100,50,50);
  object2=createSprite(200,100,50,50);
  object3=createSprite(300,100,50,50);
  object4=createSprite(400,100,50,50);
  object5=createSprite(100,400,50,50);
  object6=createSprite(1000,400,50,50);
  object1.shapeColor="blue";
  object2.shapeColor="green";
  object3.shapeColor="purple";
  object4.shapeColor="yellow";
  object5.velocityX=3;
  object6.velocityX=-3;
}

function draw() {
  background(0);  
  movingRect.y=World.mouseY;
  movingRect.x=World.mouseX;
  if(isTouching(movingRect,object1)){
    movingRect.shapeColor="red";
    object1.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    object1.shapeColor="blue";
  }
  bounceOff(object5,object6);
  drawSprites();
}
function isTouching(gameObject1,gameObject2){
  //gameObject1=movingRect
  //gameObject2=fixedRect
  if(gameObject1.x-gameObject2.x<gameObject2.width/2+gameObject1.width/2
    && gameObject2.x-gameObject1.x<gameObject2.width/2+gameObject1.width/2
    && gameObject1.y-gameObject2.y<gameObject2.height/2+gameObject1.height/2
    && gameObject2.y-gameObject1.y<gameObject2.height/2+gameObject1.height/2){
    return true;
  }
  else{
    return false;

}
}
function bounceOff(gameObject1,gameObject2){
if(gameObject1.x-gameObject2.x<gameObject2.width/2+gameObject1.width/2
  && gameObject2.x-gameObject1.x<gameObject2.width/2+gameObject1.width/2
  && gameObject1.y-gameObject2.y<gameObject2.height/2+gameObject1.height/2
  && gameObject2.y-gameObject1.y<gameObject2.height/2+gameObject1.height/2){
    gameObject1.velocityX=gameObject1.velocityX*-1;
    gameObject2.velocityX=gameObject2.velocityX*-1;
    gameObject1.velocityY=gameObject1.velocityY*-1;
    gameObject2.velocityY=gameObject2.velocityY*-1;
  }
}
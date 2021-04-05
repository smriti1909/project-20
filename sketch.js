var car, wall, speed, weight;
var deformation;






function setup() {
  createCanvas(800,400);
  car=createSprite(50,200,70,40);
  car.velocityX=4;
  wall=createSprite(800,200,60,400/2);
  
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(255,255,255); 
  if(wall.x-car.x <(car.width+wall.width)/2)
  {
    car.velocityX=0;
  deformation=0.5*weight*speed*speed/22500;
  if (deformation<100){
car.shapeColor="green";
  }else if(deformation>100 && deformation<180){
    car.shapeColor="yellow";
  }else if(deformation>180){
    car.shapeColor="red";
  }
}

  drawSprites();
}
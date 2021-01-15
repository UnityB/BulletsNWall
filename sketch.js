var bullet ;
var wall ;
var speed,weight;
var thickness ; 

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(400, 200, 50, 50);
  wall = createSprite(1500,200,100,100)
  thickness = random(40,100)


  speed = random(55,90)
  weight = random(400,1500)
  bullet.velocityX = speed
}

function draw() {
  background(0); 
 if(hasCollided(bullet, wall))
 {
   bullet.velocityX=0;
   var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
   
   if (damage>10)
   {
     wall.shapeColor=color(255,0,0);
   }

   if (damage<10)
   {
     wall.shapeColor=color(255,0,0);
   }

   
 }
  drawSprites();

  
}
function hasCollided(Lbullet, Lwall){
  bulletRightEdge = Lbullet.x +Lbullet.width;
  wallLeftEdge=Lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}

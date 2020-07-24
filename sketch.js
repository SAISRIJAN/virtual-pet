//Create variables here
var dog ,foodstock,database,dog1,dog2
function preload()
{
  //load images here
  dog1=loadImage("images/dogImg.png")
  dog2=loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database()
	createCanvas(500, 500);
   dog = createSprite(250,300,150,150);
   dog.addImage(dog1)
   dog.scale=0.30
   stock=database.ref('Food');
   stock.on("value",readstock)
}



function readstock(){

}
function draw() { 
  background(46, 139, 87) 
  text("food:",100,250)
  //fill(black)
  drawSprites();
  //add styles here
  if(keyWentDown(UP_ARROW)){
    writeStock(foods)
    dog.addImage(dog1)
  }
}
//if(keyWentDown(UP_ARROW)){
  //writeStock(foods)
  //dog.addImage(dog.happy)




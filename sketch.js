//Create variables here
var dog, dog1, happyDog, database, foods, foodStock
function preload() {
  dog1 = loadImage("Dog.png")
  happyDog = loadImage("HappyDog.png")
  
  //load images here
}


function setup() {
  createCanvas(500, 500);
  database = firebase.database
  dog = createSprite(250, 400, 20, 20)
  dog.addImage(dog1)
  dog.scale = 0.2
}

function readStock(data){
  foods = data.val()
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}

function draw() {
  background(46,139,87)
  foodStock = database.ref('Food')
  foodStock.on("value",readStock)
  if(keyWentDown(UP_ARROW)){
    writeStock(foods)
    foods = foods-1
  }
  text("Food:" + foods, 250, 250)
  drawSprites();
  //add styles here

}




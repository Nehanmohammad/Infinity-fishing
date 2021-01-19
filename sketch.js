var fisherman, fish, sharks, bg, sky, hook;
var a,b,c,d,e,f,g,h,i,j,k;
var fishGroup,sharkGroup;

function preload(){
  a = loadImage("1.png")
  b = loadImage("2.png")
  c = loadImage("3.png")
  d = loadImage("4.png")
  e = loadImage("5.png")
  f = loadImage("boat.png")
  g = loadImage("sea.jpg")
  h = loadImage("Sky.jpg")
  i = loadImage("shark1.png")
  j = loadImage("shark2.png")
  k = loadImage("hook.png")

}

function setup() {
  createCanvas(1200,650)

  fishGroup = new Group ();
  sharkGroup = new Group ();


  sky = createSprite(100,130,20,20)
  sky.addImage("run",h) 
  sky.scale  = 4
 
  bg = createSprite(520,650,20,20)
  bg.addImage("run",g)
  bg.scale = 3
  
  fisherman = createSprite(500,200,20,20)
  fisherman.addImage("run",f)
  fisherman.scale = 0.1

  hook =  createSprite(430,250,20,20)
  hook.addImage("run",k)
  hook.scale = 0.08
 
 
}

function draw() {
  background("blue");

  if(keyDown("up_arrow")){
        hook.y = hook.y - 10;
   }
    if(keyDown("down_arrow")){
        hook.y = hook.y + 10;
    }

    

if(fishGroup.isTouching(hook)){
    fishGroup.destroyEach();
}

if(sharkGroup.isTouching(hook)){
    hook.x = 430
    hook.y = 250 
}

 spawnFish();
 spawnSharks();
 drawSprites();
}


function spawnFish(){
  if (frameCount % 100 === 0){
  fish = createSprite(200,200,50,50);
  fish.scale = 0.1
  fish.x = Math.round(random(-600,700));
  fish.y = Math.round(random(400,700));
  fish.velocityX = 2;
  fish.lifetime = 700
  
    var rand = Math.round(random(1,5));
    switch(rand) {
    case 1: fish.addImage("run",a);
            break;
    case 2: fish.addImage("run",b);
            break;
    case 3: fish.addImage("run",c);
            break;
    case 4: fish.addImage("run",d);
            break;
    case 5: fish.addImage("run",e);
            break;
    default: break;
    }
    fishGroup.add(fish)

}}

function spawnSharks(){
  if (frameCount % 200 === 0){
        sharks = createSprite(10,10,50,50);
        sharks.velocityX = -5;
        sharks.scale = 0.3
        sharks.x = Math.round(random(2000,700));
        sharks.y = Math.round(random(300,500));
        sharks.lifetime = 1000
        sharks.addImage("run",i)
     
        sharkGroup.add(sharks)
}}
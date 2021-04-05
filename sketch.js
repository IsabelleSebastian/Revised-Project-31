const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var rainDrops = [];
var maxDrops = 35;

function preload(){
    
}

function setup(){
   createCanvas(400,600);
   engine = Engine.create();
   world = engine.world;

if(frameCount % 10 === 0){
    for(i=0; i<maxDrops; i++){
        rainDrops.push(new Drops(random(0,400) , random(-400,0)))
    }
}
}

function draw(){
    background("black");
    Engine.update(engine);

    for(i=0; i<maxDrops; i++){
        rainDrops[i].display(); //rainDrops[0] --> 1st raindrop.display()
    }

    

}   


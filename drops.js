class Drops
{
    constructor(x,y){
        var options = {
            restitution: 0.5,
            density: 0.25,
            friction: 0.2
        }
        this.body = Bodies.circle(x,y,5,options);
        this.radius = 5
        World.add(world,this.body);
    }
    display(){

var pos = this.body.position
push()
translate(pos.x,pos.y)
ellipseMode(CENTER)
fill("blue")
ellipse(0,0,this.radius)
pop()

if(pos.y > 600){
    Matter.Body.setPosition(this.body, {x: random(0,400),y: random(-400,0)})
}


 
    }
}
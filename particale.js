class Particle{
    constructor(x,y,r){
        this.r=r
        var options = {
            "restitution" : 0.4
        }
this.body=Bodies.circle(x,y,this.r,options )
this.colour=color(random(0,255),random(0,255),random(0,255));
World.add(world,this.body)
    }
    display(){
        push ()
        var angle = this.body.angle
        var pos = this.body.position
        translate (pos.x,pos.y)
        rotate (angle)
        fill (this.colour)
    ellipseMode(RADIUS)
    ellipse(0,0,this.r,this.r) 
    pop ()
    } 
}
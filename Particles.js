class Particles{
    constructor(x,y,r){
    
    
    this.body = Bodies.circle(x, y,r);
    this.r = r;
    World.add(world,this.body);
    this.color=color(random(0, 255), random(0, 255), random(0, 255));
    }
    
    
    display(){
    var pos=this.body.position;
    push();
    fill(this.color);
    ellipseMode(CENTER);
    ellipse(pos.x,pos.y,this.r*2,this.r*2);
    pop();
    
    
    }
    }
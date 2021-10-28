class Sling {
    constructor(body1,body2){
        var options={
            bodyA: body1,
            bodyB: body2,
            stiffness: 0.04,
            length: 10
        }
        this.rope = Matter.Constraint.create(options);
        World.add(world,this.rope);  
    }
display(){
    strokeWeight(3);
    line(this.rope.bodyA.position.x,this.rope.bodyA.position.y, this.rope.bodyB.position.x, this.rope.bodyB.position.y);
}
}
class Paper{

constructor(){

    var option={
        isStatic:false,
        restitution:0.5,
        density:1.4,
        friction:0.5


    }
    this.body=Matter.Bodies.circle(150,740,30,option);
    World.add(world,this.body);
    this.color="green"

}
display(){
    ellipseMode(CENTER);
    fill(this.color);
    var pos=this.body.position;
    ellipse(pos.x,pos.y,60);




}


}
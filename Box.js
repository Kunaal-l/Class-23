class Box {
    constructor(x,y){
        var box_options={
            //isStatic : true
            restitution: 1.0, 
            friction:0.1,
            density:0.2
          }
        
          this.body =Bodies.rectangle(x,y,30,30,box_options);
          World.add(world,this.body)  ; 

    }
 display(){
     push();
     translate(this.body.position.x,this.body.position.y)
     rotate(this.body.angle)
    rectMode(CENTER)
    rect(0,0,40,40);
    pop();
 }
}
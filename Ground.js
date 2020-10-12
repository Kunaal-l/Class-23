class Ground {
    constructor(){
        var ground_options={
            isStatic : true
            
          }
        
          this.body =Bodies.rectangle(100,400,400,20,ground_options);
          World.add(world,this.body)  ; 

    }
 display(){
    rectMode(CENTER)
    rect(this.body.position.x,this.body.position.y,800,20);
 }
}
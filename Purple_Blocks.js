class Purple_Block{
    constructor(x, y, width, height){
        var options={
           'restitution': 0.8,
           'friction': 1,
           'density': 1.2,
           'isStatic': false
        }

        this.body=Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("purple_circle.png")
        this.visibility = 255
        this.width=width
        this.height=height
        World.add(world, this.body)
 
       
       
    }

    score(){
        if (this.Visiblity < 0 && this.Visiblity > -1005){
          score++;
        }
      }
    display(){
        var pos=this.body.position
        
        if(this.body.position.y < 600){
            imageMode(CENTER)
            stroke ("green");
            fill ("yellow");
            image (this.image, pos.x, pos.y, this.width, this.height)
           }else{
            
            push ();
            World .remove(world, this.body) 
            this.visibility = this.visibility-15
            tint (255, this.visibility)
            image (this.image, pos.x, pos.y, 50, 50)
            pop ();
           }
       // rect(this.body.position.x, this.body.position.y, this.width, this.height)
    }
}
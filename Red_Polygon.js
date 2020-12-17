class Red_Polygon{
    constructor(x, y, width, height){
        var options={
           'restitution': 0.8,
           'friction': 1,
           'density': 1.2,
           'isStatic': false
        }

        this.body=Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("red_polygon.png")
        this.smokeImage = loadImage("smoke.png");
        this.width=width
        this.height=height
        World.add(world, this.body)
        this.trajectory =[];
       
       
    }

    display(){
        var pos=this.body.position
        imageMode(CENTER)
        stroke ("green");
        fill ("yellow");
        image (this.image, pos.x, pos.y, this.width, this.height)

        if(this.body.velocity.x > 5 && this.body.position.x > 260){
            var position = [this.body.position.x, this.body.position.y];
            this.trajectory.push(position);
          }

          for(var i=0; i<this.trajectory.length; i++){
            image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
          }
       // rect(this.body.position.x, this.body.position.y, this.width, this.height)
    }
}
class Ground{
    constructor(x, y, width, height){
        var options={
           'isStatic': true
        }

        this.body=Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("ground.gif")
        this.width=width
        this.height=height
        World.add(world, this.body)
 
       
       
    }

    display(){
        var pos=this.body.position
        imageMode(CENTER)
        stroke ("black");
        fill ("black");
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height)
        //rect(this.body.position.x, this.body.position.y, this.width, this.height)
    }
}
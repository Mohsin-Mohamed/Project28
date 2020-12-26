class Mango{
    constructor(x,y,width,height) {
        var options = {
            restitution:0.4,
            friction:1,
            density:1,
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/mango.png");
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill(255);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}
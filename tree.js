class Tree{
    constructor(x, y) {
        this.x=x;
        this.y=y;
        this.treewidth = 450;
        this.treeheight = 600;
        this.treethickness = 10;
        this.bottombody = Bodies.rectangle(this.x, this.y, this.treewidth, this.treethickness, {isStatic: true});
        this.leftbody = Bodies.rectangle(0, this.y-this.treeheight/2, this.treethickness, this.treeheight, {isStatic: false});
        this.rightbody = Bodies.rectangle(this.x+this.treewidth/2, this.y-this.treeheight/2, this.treethickness, this.treeheight, {isStatic: false});
        this.image = loadImage("tree.png");
        World.add(world, this.bottombody);
        World.add(world, this.leftbody);
        World.add(world, this.rightbody);
      }
      display(){
        push();
        translate(this.bottombody.position.x, this.bottombody.position.y);
        imageMode(CENTER);
        image(this.image, 0, -this.treeheight/2, this.treewidth, this.treeheight);
        pop();
      }
}
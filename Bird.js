class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image1 = loadImage("sprites/smoke.png");
    //all the position of the bird
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.position.x>210 && this.body.velocity.x > 6){
//each position of bird
    var position = [this.body.position.x,this.body.position.y];
    this.trajectory.push(position);

    }

    for(var i=0;i<this.trajectory.length; i++){
      image(this.image1, this.trajectory[i][0],this.trajectory[i][1])
    }


  }
}

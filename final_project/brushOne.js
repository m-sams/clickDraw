class shapeBrush{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  display(){
    ellipse(this.x,this.y,25);
    triangle(this.x-15,this.y-15,this.x,this.y+20,this.x+15,this.y-15);
    triangle(this.x-10,this.y-10,this.x,this.y+15,this.x+10,this.y-10);
    triangle(this.x-5,this.y-5,this.x,this.y+10,this.x+5,this.y-5);
    triangle(this.x+15,this.y+15,this.x,this.y-20,this.x-15,this.y+15);
    triangle(this.x+10,this.y+10,this.x,this.y-15,this.x-10,this.y+10);
    triangle(this.x+5,this.y+5,this.x,this.y-10,this.x-5,this.y+5);
  }
}

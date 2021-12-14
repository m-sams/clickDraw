class shapeBrush4{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  display(){
    circle(this.x,this.y,50);
    circle(this.x,this.y,40);
    circle(this.x,this.y,30);
    triangle(this.x-15,this.y-15,this.x,this.y+20,this.x+15,this.y-15);
    triangle(this.x+15,this.y+15,this.x,this.y-20,this.x-15,this.y+15);
  }
}
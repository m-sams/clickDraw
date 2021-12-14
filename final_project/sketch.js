//Brush Variable
var drawBrush;

//Slider Variables
var weightSlider;
var r,g,b;
var r2,g2,b2;

//Buttons & Related Variables
var saveDrawingBtn;
var canvasSave;
var changeShape;
var currentBrush = 1;

//Array
var shapesArray = [];

//Setup does what setup does
function setup() {
//Making the canvas available to save
  canvasSave = createCanvas(windowWidth, windowHeight);
  
//Selecting html elements for sketch manipulation
  r = select("#red-value");
  g = select("#green-value");
  b = select("#blue-value");
  r2 = select("#red-value-2");
  g2 = select("#green-value-2");
  b2 = select("#blue-value-2");
  weightSlider = select("#weightSlider");
  sizeSlider = select("#sizeSlider");
  changeShape = select("#changeShapeButton");
  saveDrawingBtn = select("#saveDrawing");
  drawBrush = new shapeBrush(mouseX, mouseY);
  
//Button responsiveness
  saveDrawingBtn.mousePressed(downloadCanvas);
  changeShape.mousePressed(changeBrush);

}

//Brush changing function
function changeBrush(){
  if(currentBrush == 1){
    currentBrush = 2;
} else if (currentBrush == 2 || currentBrush == 1){
    currentBrush = 3;
} else if (currentBrush == 3 || currentBrush == 2){
    currentBrush = 4;
} else if (currentBrush == 4){
    currentBrush = 1;
}
}

//Save drawing function
function downloadCanvas(){
  saveCanvas(canvasSave,'yourSketch','png');
}

//Function to draw on click.
function mousePressed(){
  
  if(currentBrush == 1){
    shapesArray.push(new shapeBrush(mouseX,mouseY));
  } else if (currentBrush == 2){
    shapesArray.push(new shapeBrush2(mouseX,mouseY));
  } else if (currentBrush == 3){
    shapesArray.push(new shapeBrush3(mouseX,mouseY));
  } else if (currentBrush == 4){
    shapesArray.push(new shapeBrush4(mouseX,mouseY));
  }
}

//Draw... 
function draw() {
  /*background('#F4F1DE');*/
  background(r.value(),g.value(),b.value());
  
  drawBrush.x=mouseX;
  drawBrush.y=mouseY;
  drawBrush.display();
  
  for (let i=0; i<shapesArray.length; i++){
    fill(r2.value(),g2.value(),b2.value());
    stroke(weightSlider.value());
    shapesArray[i].display();
  }
}
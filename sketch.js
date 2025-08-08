var d;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,0,255);
  //sirve para otra cosa: frameRate(5);
  frameRate(5)
}

function draw() {
   d= random(10,100); //rango de portes, del 10-100
  noStroke();
  fill(255,d); //(blanco o negro,nivel de transparencia)
   ellipse(mouseX,mouseY,d,d); //(positionx, positiony, px x, px y)
}

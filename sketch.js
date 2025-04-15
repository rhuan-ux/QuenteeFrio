


function setup() { 
  createCanvas(400, 400);

  x = random(400);
  y = random(400);
  x = int(x);
  y = int(y);


}
  function draw() {
  background(220); 
  
    x = x + random(-15, 15);
    y = y + random(-15, 15);
    
    // delimitar para nao sair da tela
    x = constrain(x,0, 400);
    y = constrain(y,0, 400);
    //circle(x,y, 10);
    let distanciaX; let distanciaY; let distancia;
    distanciaX = mouseX - x;
    distanciaY = mouseY - y;
    // teorema de pitagoras - trigonometria
    
    distancia = sqrt(distanciaX * distanciaX + distanciaY * distanciaY)
    
    
    console. log(distancia);
    circle(mouseX, mouseY, distancia);
    if(  distancia < 3){
     text('Encontrei', 200, 200);  
     noLoop();
    
    
    
                 
    }   
}
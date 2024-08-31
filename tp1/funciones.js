function dibujarRombos(tam1,tam2,juancito){
  var cant = 4;
  var trom = 68.5;
  for(let r = 0; r < cant; r++){
    for(let t = 0; t< cant; t++){
      push();
      translate(455+r*tam1,6+t*tam2); //translada el eje de cordenadas a la distancia entre cuadrado y cuadrado
      rotate(radians(45)); //rota los cuadrado conviertiendolos en rombos
      rectMode(CORNER);
      noStroke();
      fill(juancito);
      rect(0,0,trom,trom);
      pop();
    }
  }
}


function dibujarLineas(){
  let   ancho = 455 + 291; 
  let   alto = 55 + 291;
  let distancia = 4;
  for(let j = 455; j < ancho; j+=distancia){
    strokeWeight(1.5);
    stroke(lineas);
    line(j,55,j,alto);
  }
}

function dibujarCuadros(){
  let cantidad = 3;
  let suma = 95;
  let alfa = 90;
  for(let y = 0; y < cantidad; y++){
    cuadrosre.setAlpha(0+y*alfa);
    fill(cuadrosre);
    noStroke();
    rectMode(CENTER);
    rect(600,200,291-y*suma,291-y*suma);
    //print('Estado de la y:' + y);
  }
}


function dibujarRecuadro(){
  noStroke();
  fill(recuadro);
  rect(405,5,390,390);
}

function colorInteractivo (pos){
  return (height-pos);
}

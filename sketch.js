let angle = 0;

function setup() {
createCanvas(400, 400); 
}

function draw() {
    //!strokeWeight(5);
   //! ellipse(200,200,200,200)
      //!  ellipse(160,180,10,10)
       //! arc(235, 190, 40, 40, radians(200), radians(345)); 
      //!  arc(200, 210, 80, 80, radians(385), radians(150)); 
        // PRUEBA DE HACER UNA CARITA FELIZ //
    
    background(0);
    translate(width / 2, height / 2);
    rectMode(CENTER);
    
    
    let offset = 0;
    for (let x = 0; x < width; x += 8) {
        let a = angle + offset;
        let h = map(sin(a), -1, 1, 0, 100); //para que haga arriba y abajo)//
        fill(255);
        rect(x - width / 2, 0, 10, h); //propiedades de la recta ; (posicion,//
        offset += 0.25;
    
  
    }
    
    angle += 0.1;

}
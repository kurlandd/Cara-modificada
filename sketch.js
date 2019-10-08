let w = 600;
let h = 600;
let mic;

let img;




function setup() {
    
    
  createCanvas(1000, 1000);
  
  noStroke();
mic = new p5.AudioIn();
mic.start();
    img = loadImage('cat.jpeg');
    
}

function draw() {
 
  
    micLevel = mic.getLevel();
    
    mov = map(micLevel, 0, 1, 1, 3000);
  
    background(255);


   
    
  let boca_w = width/4;
    
  
  noStroke();
  push();
  translate(width/7.5, height/5);
  
   
    
 //fons de la boca 
  fill('#222222');
  rect (0,100,boca_w,200);
  
  //lengua
  fill('pink');
  rect(0,height/9,boca_w,height*0.2, 10);
  
  //dientes
  fill('white');
  rect(0,height/7,boca_w,height*0.1,10);
  
  //barba
  fill('#222222');
  rect(0,height/3.5,boca_w,height/8.5);
    
     //cos 
fill('#222222');
  rect (width/12,height/3, width/13, 200);
    
    //mano
    fill('#222222');
  rect (width/12,height/2.3, width/3, 20);
    
    //cat
  image(img, width/2.6,height/3, 100 + mov, 100 + mov);
    
    
 //pierna iz
fill('#222222');
  rect (width/12,height/2, width/29, height/7);
 
     //pierna der 
fill('#222222');
  rect (width/8,height/2, width/29, height/7);
    
     //pie der
    fill('#222222');
  rect (width/8 + mov*0.2,height/1.6, width/11, 20);
    
    //pie izq
    fill('#222222');
  rect ( mov*0.2 + width/38 ,height/1.6, width/11, 20 );
    
    
  pop();
  
  //frente
  fill('#222222')+mov+('red');
  rect(0,0, width*0.5,height*0.4, 15);
  
  //ojo izquierdo
  fill(255);
  ellipse(width*0.1,height*0.2,40, mov+10);
  fill('red');
  //ellipse(width*0.25,height/2.5,10);
  ellipse(width*0.1,height*0.2,10, mov+10);
  
  //ojo derecho
  fill(255);
  ellipse(width*0.4,height*0.2,40, mov+10);
  fill('red');
  ellipse(width*0.4,height*0.2,10, mov+10);
  
  //nariz
  noFill();
  stroke('white');
  strokeWeight(10);
  arc(width/3.8, height/3.7, 20, 20, radians(360), radians(360), );

noFill();
  stroke('white');
  strokeWeight(10);
  arc(width/4.2, height/3.7, 20, 20, radians(360), radians(360), );
      


}



    
function touchStarted() {
    getAudioContext().resume();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

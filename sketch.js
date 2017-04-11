var x = 300;
var y = 200;
var speedx = 8;
var speedy = 6;
sizes = [5,10,15,20,25,30,35,40,45,50];



function setup(){
  createCanvas(600,400);
}
  


function draw(){
  background(0);
  redBall();
  display();
  move();
  bounce();
 changeBackground();
  line();
  stripe();
  
}


function display(){
    stroke(255);
    strokeWeight(4);
    fill(255,0,0);
    ellipse(x,y,50,50);
    
}

function redBall(){
  fill(255,0,0);
  ellipse(300,250,100,100);
}


function move(){
 y = y + speedy;
 x = x + speedx;
}

function bounce(){
    if(x>600 || x<0){
        speedx = -speedx;
    }
    if(y>400 || y<0){
        speedy = -speedy;
    }
}

function changeBackground(){
    if (mouseIsPressed && mouseY < 200){
        background(255,255,0);
    }
    
    else if(mouseIsPressed && mouseY >=200){
        background(0,0,255);
    }
}
function stripe(){
    fill(0,0,255);
    x = 200;
    y+=4;
    rect(x,y,100,height);
    if(y > height){
        y = 0 - height;
    }
    
}



function line(){
    var i = 0;
    var yLine = 20;
    while (i<10){
        stroke(255);
        line(100,yLine,500,yLine);
        i++;
        yLine += 20;
        
      
    }
}

function rowCircles(yRow){
    var xCircle = 40;
    for(var i = 0; i < 10; i++){
        nostroke();
        fill(225,225,0);
        ellipse(xCicrle,yRow,sizes[i],sizes[i]);
        xCircle += 50;
    }
    
}
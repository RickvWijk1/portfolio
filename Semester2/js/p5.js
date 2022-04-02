
function setup(){
    createCanvas(600, 600);
}
function draw(){
    background(51)

    
    house(200, 300, 250, 250, 300, 300, 20);
    house(100, 150, 125, 125, 150, 150, 10);
    
}




function house(x1, y1, x2, y2, x3, y3, d){
    fill(100, 200, 255);
    rect(x1, y1, x3-x1, (y1-y2)*2);
    fill(255, 120, 120);
    triangle(x1, y1, x2, y2, x3, y3);
    fill(255, 255, 255);
    ellipse((x3-x1)/2+x1, (x3-x1)/4+y1, d, d);
}

// house(100, 150, 125, 125, 150, 150, 10);

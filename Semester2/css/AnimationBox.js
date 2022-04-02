window.onload = function() {
    var posX1 = 0; 
    var posY1 = 0; 
    var posX2 = 0; 
    var posY2 = 0; 
    //our box element
    var box = document.getElementById('box');
    var box2= document.getElementById('boxinbox');
    var t1 = setInterval(movebox1, 10);
    var t2 = setInterval(movebox2, 5);
  
    function movebox1() {
        if(posX1 >= 0 && posX1 < 150 && posY1 <= 0) {
            posX1 += 1;
        } else if(posX1 >= 150 && posY1 < 150 && posY1 >= 0) {
            posY1 += 1;
        } else if(posX1 > 0 && posX1 <= 150 && posY1 >= 150) {
            posX1 -= 1;
        } else if(posX1 <= 0 && posY1 <= 150 && posY1 > 0) {
            posY1 -= 1;
        }
        box.style.left = posX1+'px';
        box.style.top = posY1+'px';
    }
        function movebox2() {
        if(posX2 >= 0 && posX2 < 40 && posY2 <= 0) {
            posX2 += 1;
        } else if(posX2 >= 40 && posY2 < 40 && posY2 >= 0) {
            posY2 += 1;
        } else if(posX2 > 0 && posX2 <= 40 && posY2 >= 40) {
            posX2 -= 1;
        } else if(posX2 <= 0 && posY2 <= 40 && posY2 > 0) {
            posY2 -= 1;
        }
        box2.style.left = posX2+'px';
        box2.style.top = posY2+'px';
    }
};
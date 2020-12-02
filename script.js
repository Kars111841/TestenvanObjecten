function setup() {
    createCanvas(480, 200);
}
  
  function draw() {
    background(0, 0, 0);
   
    fill(255,0,0);
    rect(10, 10, 60, 20);
    fill(255, 255, 0);
    text("Modus van operatie", 75, 25);
}

class Positie {
    xPos;
    yPos;

    constructor(_xPos, _yPos) {
        this.xPos = _xPos;
        this.yPos = _yPos;
    }
}


class Switch extends Positie {
    status;
    
    constructor(_xPos, _yPos) {
        super(_xPos, _yPos);
        this.status = true;
    }

    checkForInput() {
        
    }
}
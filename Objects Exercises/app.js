
function setup() {
    createCanvas(800, 600);
}

let basketball = {
    x: 50, y: 50, d: 80,
    ballColor: "#f37e3b",
    lineColor: 0
}

function drawHorseshoe(basketball) {
    
    fill(basketball.ballColor);
    circle(basketball.x, basketball.y, basketball.d);

    fill(basketball.lineColor);
    line(basketball.x - (basketball.d / 2), basketball.y, 
        basketball.x + (basketball.d / 2), basketball.y);
    line(basketball.x, basketball.y - (basketball.d / 2), 
        basketball.x, basketball.y + (basketball.d / 2));
    line(basketball.x - (basketball.d / 4), basketball.y - (basketball.d * Math.sqrt(3) / 4), 
        basketball.x - (basketball.d / 4), basketball.y + (basketball.d * Math.sqrt(3) / 4));
    line(basketball.x + (basketball.d / 4), basketball.y - (basketball.d * Math.sqrt(3) / 4), 
        basketball.x + (basketball.d / 4), basketball.y + (basketball.d * Math.sqrt(3) / 4));
}

function draw() {
    drawHorseshoe(basketball);
}
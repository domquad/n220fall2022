// Set up canvas for objects to be drawn on
function setup() {
    createCanvas(800, 600);
}

// Create basketball object
let basketball = {
    x: 50, y: 50, d: 80,    // Define position and diamater values for circle
    ballColor: "#f37e3b",   // Define color of basketball
    lineColor: 0            // Define color of basketball lines
}

// Draw basketball object using its properties
function drawBBall(basketball) {
    background(255);    // Clear the canvas

    fill(basketball.ballColor);                         // Prepare to draw with the basketball's color
    circle(basketball.x, basketball.y, basketball.d);   // Draw the circle for the basketball

    fill(basketball.lineColor);                             // Prepare to draw with the basketball lines' color
    line(basketball.x - (basketball.d / 2), basketball.y, 
        basketball.x + (basketball.d / 2), basketball.y);   // Draw horizontal basketball line
    line(basketball.x, basketball.y - (basketball.d / 2), 
        basketball.x, basketball.y + (basketball.d / 2));   // Draw middle vertical basketball line
    line(basketball.x - (basketball.d / 4), basketball.y - (basketball.d * Math.sqrt(3) / 4), 
        basketball.x - (basketball.d / 4), basketball.y + (basketball.d * Math.sqrt(3) / 4));   // Draw left vertical basketball line
    line(basketball.x + (basketball.d / 4), basketball.y - (basketball.d * Math.sqrt(3) / 4), 
        basketball.x + (basketball.d / 4), basketball.y + (basketball.d * Math.sqrt(3) / 4));   // Draw right vertical basketball line
}

let paddles = [
    {x:  10, y: 200, l: 40, h: 200, color: "#ff0000"},
    {x: 410, y: 200, l: 40, h: 200, color: "#0000ff"}
];

function drawPaddle() {
    background(255);    // Clear the canvas

    // Loop through paddles array and draw each object using the properties at their indexes
    for(i = 0; i < paddles.length; i++) {
        fill(paddles[i].color);
        rect(paddles[i].x, paddles[i].y, paddles[i].l, paddles[i].h);
    }

    if (keyIsDown(UP_ARROW)) {
        paddles[0].y -= 20;
        paddles[1].y += 20;
    }

    if (keyIsDown(DOWN_ARROW)) {
        paddles[0].y += 20;
        paddles[1].y -= 20;
    }
}
// Draw all objects on the canvas
function draw() {
    drawBBall(basketball);
    drawPaddle();
}
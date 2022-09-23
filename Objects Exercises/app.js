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

// Create two paddle objects and store them in a collection
let paddles = [
    {x:  10, y: 200, l: 40, h: 200, color: "#ff0000"},
    {x: 410, y: 200, l: 40, h: 200, color: "#0000ff"}
];

// Draw and animate both paddles
function drawPaddle() {
    background(255);    // Clear the canvas

    // Loop through paddles array and draw each object using the properties at their indexes
    for(i = 0; i < paddles.length; i++) {
        fill(paddles[i].color);
        rect(paddles[i].x, paddles[i].y, paddles[i].l, paddles[i].h);
    }

    // Change paddles' positions if the Up Arrow Key is pressed
    if (keyIsDown(UP_ARROW)) {
        paddles[0].y -= 20;
        paddles[1].y += 20;
    }

    // Change paddles' positions if the Down Arrow Key is pressed
    if (keyIsDown(DOWN_ARROW)) {
        paddles[0].y += 20;
        paddles[1].y -= 20;
    }
}

// Create bouncy ball object
let bouncyball = {
    x: 20, y: 20, d: 40, 
    color: "#04dfef",
    xBound: 800, yBound: 600,
    xVel: -5, yVel: -5
}

// Create function to move bouncy ball
function rebound(bouncyball) {

    // Change the horizontal direction of the ball if it hits one of the bounds
    if((bouncyball.x >= (bouncyball.xBound - (bouncyball.d / 2))) ||
        (bouncyball.x <= (bouncyball.d / 2))) {
        bouncyball.xVel *= -1;
    }

    // Change the vertical direction of the ball if it hits one of the bounds
    if((bouncyball.y >= (bouncyball.yBound - (bouncyball.d / 2))) ||
        (bouncyball.y <= (bouncyball.d / 2))) {
        bouncyball.yVel *= -1;
    }

    bouncyball.x += bouncyball.xVel;    // Move the ball horizontally
    bouncyball.y += bouncyball.yVel;    // Move the ball vertically
}

// Draw and animate rebounding bouncy ball
function drawBouncy(bouncyball) {
    background(255);    // Clear the canvas

    fill(bouncyball.color);                             // Prepare to paint with bouncy ball's color
    circle(bouncyball.x, bouncyball.y, bouncyball.d);   // Draw bouncy ball as a circle

    setInterval(rebound(bouncyball), 50);     // Move the bouncy ball via rebound() every 50 milliseconds
}

// Draw all objects on the canvas
function draw() {
    drawBBall(basketball);
    drawPaddle();
    drawBouncy(bouncyball);
}
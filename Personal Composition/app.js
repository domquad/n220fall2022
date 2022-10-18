
// Set up canvas for Premier Ball to be drawn on
function setup() {
    createCanvas(800, 600);
}

function drawPremierBall() {
    
    // Draw Premier Ball Outline
    strokeWeight(1);
    stroke(16);
    circle(120, 120, 200);

    // Fill in Premier Ball with its base color
    fill(225);
    circle(120, 120, 200);

    // Draw Opening Line
    strokeWeight(10);
    stroke("red");
    line(23, 120, 217, 120);

    // Draw center button
    circle(120, 120, 50);
    strokeWeight(1);
    stroke(16);
    circle(120, 120, 30);
}

// Call function to draw Premier Ball on canvas
function draw() {
    drawPremierBall();
}
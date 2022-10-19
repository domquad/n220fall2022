
// Set up canvas to be drawn onto
function setup() {
    createCanvas(800, 600);
}

function drawFootball(x, y) {

    // Draw center of football
    strokeWeight(1);
    stroke(6);
    fill("#663831");
    ellipse(x, y, 120, 80);     // Use x and y as parameters for location

    // Draw middle crease
    strokeWeight(2);
    stroke(6);
    line(x - 60, y, x + 60, y); // Draw line based on paramaterized center

    // Draw laces
    strokeWeight(4);
    stroke("#dbc68c");
    for (let i = 1; i <= 8; i++) {
        // Draw each line in a row based on paramaterized center
        line(x - 36 + (i * 8), y - 42, x - 36 + (i * 8), y - 35);
    }

    // Draw stripes
    strokeWeight(6);
    stroke("#dadada");
    line(x - 40, y - 28, x - 40, y + 28);   // With one below, draw each line based on paramaterized center
    line(x + 40, y - 28, x + 40, y + 28);
}

function removeRed(c) {     // Receive color() paramater
    return c.setRed(0);     // Return the paramater after setting its red value to 0
}

function drawNoRed() {
    let noRed = removeRed(color(170, 200, 150));    // Use removeRed() to reset the given color's red value to 0, and store in a local variable

    // Draw circle using noRed as the color
    strokeWeight(0);
    fill(noRed);
    circle(200, 200, 100);
}

function polarPoint(r) {

    // Set location variables to points along a circle, depending on the horizontal location of the mouse, with radius r
    let x = r * Math.sin(mouseX);
    let y = r * Math.cos(mouseX);

    return createVector(x, y);  // Return vector of location variables
}

function drawPolar() {

    // Clear small area encompassing the circles
    fill(255);
    rect(50, 50, 50, 50);

    let res = polarPoint(10);   // Create a Polar Point with a radius of 10
    translate(100, 100);        // Position circles around (100, 100) 

    // Draw a circle with radius 10 at each Polar Point
    fill("#320580");
    circle(res.x, res.y, 20);
}

// Call all instances of each draw function
function draw() {
    drawFootball(100, 100);
    drawFootball(100, 300);
    drawFootball(300, 100);
    drawFootball(300, 300);
    drawNoRed();
    drawPolar();
}
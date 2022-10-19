
// Set up canvas to be drawn onto
function setup() {
    createCanvas(800, 600);
}

function drawFootball(x, y) {

    strokeWeight(1);
    stroke(6);
    fill("#663831");
    ellipse(x, y, 120, 80);

    strokeWeight(2);
    stroke(6);
    line(x - 60, y, x + 60, y);

    strokeWeight(4);
    stroke("#dbc68c");
    for (let i = 1; i <= 8; i++) {
        line(x - 36 + (i * 8), y - 42, x - 36 + (i * 8), y - 35);
    }

    strokeWeight(6);
    stroke("#dadada");
    line(x - 40, y - 28, x - 40, y + 28);
    line(x + 40, y - 28, x + 40, y + 28);
}

function drawNoRed() {
    let noRed = removeRed(color(170, 200, 150));

    strokeWeight(0);
    fill(noRed);
    circle(200, 200, 100);
}

function removeRed(c) {
    return c.setRed(0);
}

function draw() {
    drawFootball(100, 100);
    drawFootball(100, 300);
    drawFootball(300, 100);
    drawFootball(300, 300);
    drawNoRed();
}
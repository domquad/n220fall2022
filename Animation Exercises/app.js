
let counter = 0;    // Global variable to keep track of every time the canvas is drawn onto

// Count function increases the counter variable by 1 and prints the new value to the console
function count() {
    counter++;              // Increases the counter variable by 1
    console.log(counter);   // Prints new value to console
}

var p = ( puck ) => {       // Create new variable for the mechanics of "Puck Side"

    // Setup canvas for "Puck Side" to be drawn on
    puck.setup = () => {
        puck.createCanvas(400, 300);
    };
  
    // Draw function for "Puck Side"
    puck.draw = () => {
        
        puck.background(255);       // Clear background for every new frame
        puck.fill(255);             
        puck.strokeWeight(2);
        puck.stroke(1);
        puck.rect(0, 0, 400, 300);  // Create border for canvas for "Puck Side" (with 3 above)

        puck.strokeWeight(1);
        if (puck.mouseX < 200) {    // If puck is on left side of canvas, set puck's color to blue
            puck.fill("blue");
        } else {                    // If puck is on right side of canvas, set puck's color to red
            puck.fill("red");
        }
        puck.circle(puck.mouseX, puck.mouseY, 20);  // Draw puck at mouse position

        count();    // Run count function after puck's instance of draw() is called
    };
};

var w = ( wrap ) => {       // Create new variable for the mechanics of "World Wrap"
  
    let ballx = 25;         // Preset ball's horizontal location to left side of canvas

    // Setup canvas for "World Wrap" to be drawn on
    wrap.setup = () => {
        wrap.createCanvas(800, 600);
    };
  
    // Draw function for "World Wrap"
    wrap.draw = () => {
        wrap.background(255);       // Clear background for every new frame
        wrap.fill(255);
        wrap.strokeWeight(2);
        wrap.stroke(1);
        wrap.rect(0, 0, 800, 600);  // Create border for canvas for "Puck Side" (with 3 above)

        if (ballx >= 775) {         // If ball hits right edge of canvas, teleport it to left edge of canvas
            ballx = 25;
        } else {                    // Otherwise, move ball to the right by 5 pixels
            ballx += 5;
        }
        wrap.fill("#04e7f7");           // Set color for ball
        wrap.circle(ballx, 300, 50);    // Draw ball at new location

        count();    // Run count function after wrap's instance of draw() is called
    };
};
  
// Create new instances of p5 with above mechanics variables
let p5puck = new p5(p);
let p5wrap = new p5(w);

// Put all UI divs into an array
let UI_Divs = [document.getElementById("UI_0"), document.getElementById("UI_1"), 
               document.getElementById("UI_2"), document.getElementById("UI_3"), 
               document.getElementById("UI_4"), document.getElementById("UI_5"), 
               document.getElementById("UI_6")];
let currentUIDiv = UI_Divs[0];  // Create a temporary variable to store the currently highlighted div

// Loop through array and limit the size of all divs
for (let i = 1; i < UI_Divs.length; i++) {
    UI_Divs[i].style.width = "55px";
}

function clear() {
    UI_Divs[0].innerHTML = "";                      // Reset the echoed text at the top of the screen
    currentUIDiv.style.backgroundColor = "white";   // With the next line, unhighlight the current div
    currentUIDiv.style.fontWeight = "normal";
}
function select(UI_id) {
    clear();        // Reset the UI to normal
    let temp_div = UI_Divs[UI_id];                  // Create temporary variable to store clicked div to be highlighted
    UI_Divs[0].innerHTML = temp_div.innerHTML;      // Echo the clicked div's text to the text at the top of the screen
    temp_div.style.backgroundColor = "cyan";        // With the next line, highlight the clicked div
    temp_div.style.fontWeight = "bold";
    currentUIDiv = temp_div;                        // Update the current div to be the clicked div
}

// Put all the RPS divs into an array
let RPS_Divs = [document.getElementById("Rock"),     document.getElementById("Paper"), 
                document.getElementById("Scissors"), document.getElementById("Guard"), 
                document.getElementById("Score")];

let score = 0;      // Create global variable to store user's score
let rand = 0;       // Create temp variable to store computer's choice
RPS_Divs[4].innerHTML = score; // Display the score

function play(RPS_id) {
    if (RPS_id == 3) {
        score -= 0.5;   // Subtract 0.5 from the score if the user chose to guard
    } else {
        rand = Math.floor(Math.random() * 3);   // Randomly generate computer's move
        if (((RPS_id == 0) && (rand == 1)) || 
            ((RPS_id == 1) && (rand == 2)) ||
            ((RPS_id == 2) && (rand == 0))) { 
            score--;    // Subtract score by 1 if user loses to computer
        } else if (((RPS_id == 0) && (rand == 2)) || 
                   ((RPS_id == 1) && (rand == 0)) ||
                   ((RPS_id == 2) && (rand == 1))) {
            score++;    // Add score by 1 if user beats computer
        }
    }
    document.getElementById("You").innerHTML = RPS_Divs[RPS_id].innerHTML;      // Display the move the user made
    document.getElementById("Computer").innerHTML = RPS_Divs[rand].innerHTML;   // Display the move the computer made
    RPS_Divs[4].innerHTML = score;  // Display updated score
}
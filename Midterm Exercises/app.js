
let UI_Divs = [document.getElementById("UI_0"), document.getElementById("UI_1"), 
               document.getElementById("UI_2"), document.getElementById("UI_3"), 
               document.getElementById("UI_4"), document.getElementById("UI_5"), 
               document.getElementById("UI_6")];
let currentUIDiv = UI_Divs[0];

for (let i = 1; i < UI_Divs.length; i++) {
    UI_Divs[i].style.width = "55px";
}

function clear() {
    UI_Divs[0].innerHTML = "";
    currentUIDiv.style.backgroundColor = "white";
    currentUIDiv.style.fontWeight = "normal";
}
function select(UI_id) {
    clear();
    let temp_div = UI_Divs[UI_id];
    UI_Divs[0].innerHTML = temp_div.innerHTML;
    temp_div.style.backgroundColor = "cyan";
    temp_div.style.fontWeight = "bold";
    currentUIDiv = temp_div;
}

let RPS_Divs = [document.getElementById("Rock"),     document.getElementById("Paper"), 
                document.getElementById("Scissors"), document.getElementById("Guard"), 
                document.getElementById("Score")];

let score = 0;
let rand = 0;
let you      = document.getElementById("You");
let computer = document.getElementById("Computer");
RPS_Divs[4].innerHTML = score;

function play(RPS_id) {
    if (RPS_id == 3) {
        score -= 0.5;
    } else {
        rand = Math.floor(Math.random() * 3);
        if (((RPS_id == 0) && (rand == 1)) || 
            ((RPS_id == 1) && (rand == 2)) ||
            ((RPS_id == 2) && (rand == 0))) {
            score--;
        } else if (((RPS_id == 0) && (rand == 2)) || 
                   ((RPS_id == 1) && (rand == 0)) ||
                   ((RPS_id == 2) && (rand == 1))) {
            score++;
        }
    }
    you.innerHTML = RPS_Divs[RPS_id].innerHTML;
    computer.innerHTML = RPS_Divs[rand].innerHTML;
    RPS_Divs[4].innerHTML = score;
}

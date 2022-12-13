
// Drag useful HTML elements for divisibility exercise into js
numBy7 = document.getElementById("numBy7");
divBy7 = document.getElementById("divBy7");
// Define function to check divisibility
function calcBy7(n) {
    // Return true if argument is divisible by 7; return false if not
    if(n % 7 == 0) {
        return true;
    } return false;
}
// Define function handle onclick for divisibility
function updateBy7() {
    // Update div to display divisibility
    if(calcBy7(numBy7.value)) {
        divBy7.innerHTML = "That number is divisible by 7!";
    } else {
        divBy7.innerHTML = "That number is not divisible by 7!";
    }
}

// Drag useful HTML elements for RNG exercise into js
divRand = document.getElementById("divRand");
// Define function to generate random number
function genRand() {
    // Return random number from 1 - 10
    return Math.floor(1 + 10 * Math.random());
}
// Define function handle onclick for divisibility
function updateRand() {
    // Update div to display random number
    divRand.innerHTML = genRand();
}

// Drag useful HTML elements for string cleaning exercise into js
strClean = document.getElementById("strClean");
divClean = document.getElementById("divClean");
// Define function to clean string of #'s
function cleanStr(str) {
    let newString = "";                         // Create local string variable
    for(let i = 0; i < str.length; i++) {       // Iterate through passed string
        if(str[i] != '#') {                     
            newString += str[i];                // Add passed string's character to new string if it isn't a #
        }
    } return newString;
}
// Define function handle onclick for string cleaning
function updateClean() {
    // Update div to display cleaned string
    divClean.innerHTML = cleanStr(strClean.value);
}
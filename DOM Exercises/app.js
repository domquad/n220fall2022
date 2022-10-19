
function peakPixels() {

    let ppDiv = document.createElement("div");  // Create new div
    let ppX   = 100;    // Create variable to store width  of div
    let ppY   = 100;    // Create variable to store height of div

    // Style div, using variables for width and height
    ppDiv.style.width  = ppX + "px";
    ppDiv.style.height = ppY + "px";
    ppDiv.style.background = "green";

    document.getElementsByTagName("body")[0].appendChild(ppDiv);    // Add div to body of html
    
    // Do the following when div is clicked
    ppDiv.onclick = function() {

        // Increase size by 10%
        ppX *= 1.1;
        ppY *= 1.1;
    
        // Update div's style
        ppDiv.style.width  = ppX + "px";
        ppDiv.style.height = ppY + "px";
    };
}

function mcDivns() {
    
    let mcDiv = document.createElement("div");  // Create new div
    let mcX = 20.5;     // Create variable to store width of div

    // Style div, using variables for width and height
    mcDiv.style.width  = mcX + "px";
    mcDiv.style.height = "20px";
    mcDiv.style.background = "red";

    document.getElementsByTagName("body")[0].appendChild(mcDiv);    // Add div to body of html
    
    // Do the following when div is clicked
    mcDiv.onclick = function() {
        
        // Increase width of div by 20.5px unless it's the first click
        if (mcDiv.innerHTML != "") {
            mcX += 20.5;
        }    

        mcDiv.style.width = mcX + "px";     // Update div width
        mcDiv.innerHTML += "div";           // Add text "div" to div
    }
}

function overOut() {

    let ooDiv = document.createElement("div");  // Create new div

    // Style div
    ooDiv.style.width  = "100px";
    ooDiv.style.height = "100px";
    ooDiv.style.background = "blue";

    document.getElementsByTagName("body")[0].appendChild(ooDiv);    // Add div to body of html

    // Change background color to black when mouse is over div
    ooDiv.onmouseover = function() {
        ooDiv.style.background = "black";
    };

    // Change background color to blue when mouse is no longer over div
    ooDiv.onmouseout = function() {
        ooDiv.style.background = "blue";
    };
}

// Call all functions to add divs to html
peakPixels();
mcDivns();
overOut();

let div1 = document.getElementById("task_1");   // Assign a variable to reference the div element for Task 1
for (let i = 1; i <= 5; i++) {                  // Loop 5 times
    div1.innerHTML += "&ensp;" + i * 1000;      // Write the first 5 multiples of 1000 to the div element using the iterating variable
}


let div2  = document.getElementById("task_2");  // Assign a variable to reference the div element for Task 2
for (let i = 0; i < 25; i++) {      // Loop 25 times
    div2.innerHTML += "&ensp;";     // Indent two spaces for formatting
    if (i % 3 == 0) {               // Write "beep" to the div if the iteration is divisble by 3
        div2.innerHTML += "beep";
    }
    if (i % 5 == 0) {               // Write "bop"  to the div if the iteration is divisble by 5
        div2.innerHTML += "bop";
    }
    if ((i % 3 != 0) && (i % 5 != 0)) { // Write the iteration value if it's neither divisible by 3 nor 5
        div2.innerHTML += i;
    }
}

let bestTimes = [9.68, 9.84, 10.13];    // Create an array for the fastest 3 times logged by race participants
let div3a = document.getElementById("task_3a"); div3a.innerHTML += bestTimes[1]  + " seconds";  
    // Assign a variable to reference the first  div element for Task 3
    // Write the second fastest time to the div element by accessing the second value in the array
let div3b = document.getElementById("task_3b"); div3b.innerHTML += bestTimes[2]  + " seconds";  
    // Assign a variable to reference the second div element for Task 3
    // Write the third  fastest time to the div element by accessing the third  value in the array


let div4  = document.getElementById("task_4");  // Assign a variable to reference the div element for Task 4
let favorray = ["Colts Football", "Romantic Warrior by Return to Forever", "My Bed", "Pokemon Platinum", "Mini Corndogs"];
    // Create an array of Strings that represent my "favorite things"
for (let i = 0; i < favorray.length; i++) {     // Loop through array
    div4.innerHTML += "<br />&ensp;" + favorray[i] + ", is one of my favorite things."
    // Format and write sentences by concatenating repeating words with the array values
}
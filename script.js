 alert("Hello(newbranch)"); 
    var result = confirm("Are you ready?:)");
    if(result == false){
        alert("Game over"); 
    }
    else{
        var name = prompt("What is your name?")
        var surname = prompt("What's your surname?")
        var age = prompt("How old are you?")
        var away = prompt("Make a word from: Y A A W")
        var bus = prompt("Make a word from: S B U")
        var ground = prompt("Make a word from: D N O G U R")
        var smoke = prompt("Make a word from: E S K M O")
        var water = prompt(" Make a word from: R W A T E")
        const POINTS = 2**2
        console.log (POINTS)
        
        var score = 0
        if (away == "away") {
            score += 1 * POINTS;
        }
        
        if (bus == "bus") {
            score += 2 * POINTS
        }
        
        if (ground == "ground") {
            score += 3 * POINTS
        }
        
        if (smoke == "smoke") {
            score += 4 * POINTS
            
        }
        
        if (water == "water") {
            score += 5 * POINTS;
        }
        
        alert (score);
    }

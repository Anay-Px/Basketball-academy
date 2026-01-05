
function startAdventure() {
  alert("Welcome to the Basketball Championship!");
  
  var choice1 = prompt("The game is tied. Do you want to 'SHOOT' the ball or 'PASS' it?");

  if (choice1 === "SHOOT" || choice1 === "shoot") {
    
    var shootChoice = prompt("You take the shot! Is it a '3-POINTER' or a 'LAYUP'?");
    
    if (shootChoice === "3-POINTER" || shootChoice === "3-pointer") {
      alert("SWISH! You won the game with a buzzer-beater!");
    } else {
      alert("The defense blocked your layup. You lost the game!");
    }

  } else if (choice1 === "PASS" || choice1 === "pass") {
    
    alert("You passed to your teammate, but they weren't looking! The ball went out of bounds. Game Over.");
    
  } else {
    alert("That wasn't an option! The shot clock ran out.");
  }
}

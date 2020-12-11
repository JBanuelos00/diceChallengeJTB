
// setting the number generators to a variable
var random1 = random1();
var random2 = random2();

// setting a variable for DOM navigation for ease of use
var imageSelect1 = document.querySelector(".img1");
var imageSelect2 = document.querySelector(".img2");
var headingSelect = document.querySelector("h1");

// based on random1 set the img1 src via setAttribute();
if(random1 === 1) {
  imageSelect1.setAttribute("src", "images/dice1.png")
} else if (random1 === 2) {
  imageSelect1.setAttribute("src", "images/dice2.png")
} else if (random1 === 3) {
  imageSelect1.setAttribute("src", "images/dice3.png")
} else if (random1 === 4) {
  imageSelect1.setAttribute("src", "images/dice4.png")
} else if (random1 === 5) {
  imageSelect1.setAttribute("src", "images/dice5.png")
} else {
  imageSelect1.setAttribute("src", "images/dice6.png")
}

// based on random2 set the img2 src via setAttribute
if(random2 === 1) {
  imageSelect2.setAttribute("src", "images/dice1.png")
} else if (random2 === 2) {
  imageSelect2.setAttribute("src", "images/dice2.png")
} else if (random2 === 3) {
  imageSelect2.setAttribute("src", "images/dice3.png")
} else if (random2 === 4) {
  imageSelect2.setAttribute("src", "images/dice4.png")
} else if (random2 === 5) {
  imageSelect2.setAttribute("src", "images/dice5.png")
} else {
  imageSelect2.setAttribute("src", "images/dice6.png")
}

// check if player 1 or two wins then change h1 accordingly
if(random1 > random2) {
  headingSelect.innerHTML = "Player 1 Wins!";
} else if (random2 > random1) {
  headingSelect.innerHTML = "Player 2 Wins!";
} else {
  headingSelect.innerHTML = "Draw!";
}

// random number generators for each player to roll 1-6
function random1() {
  var randNum1 = Math.floor(Math.random() * 6) + 1;

  return randNum1
}

function random2() {
  var randNum2 = Math.floor(Math.random() * 6) + 1;

  return randNum2
}

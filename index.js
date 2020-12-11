
// setting the number generators to a variable
var random1 = Math.floor(Math.random() * 6) + 1;
var random2 = Math.floor(Math.random() * 6) + 1;

// setting a variable for DOM navigation for ease of use
var imageSelect1 = document.querySelector(".img1");
var imageSelect2 = document.querySelector(".img2");
var headingSelect = document.querySelector("h1");

// setting a variable that automatically selects the image based on the random number
var randImgSrc1 = "images/dice" + random1 + ".png";
var randImgSrc2 = "images/dice" + random2 + ".png";

// based on random1 set the img1 src via setAttribute();
imageSelect1.setAttribute("src", randImgSrc1);

// based on random2 set the img2 src via setAttribute
imageSelect2.setAttribute("src", randImgSrc2);

// check if player 1 or two wins then change h1 accordingly
if(random1 > random2) {
  headingSelect.innerHTML = "Player 1 Wins!";
} else if (random2 > random1) {
  headingSelect.innerHTML = "Player 2 Wins!";
} else {
  headingSelect.innerHTML = "Draw!";
}



var random1 = random1();
var random2 = random2();

console.log(random1);
console.log(random2);

function random1() {
  var randNum1 = Math.floor(Math.random() * 6) + 1;

  return randNum1
}

function random2() {
  var randNum2 = Math.floor(Math.random() * 6) + 1;

  return randNum2
}

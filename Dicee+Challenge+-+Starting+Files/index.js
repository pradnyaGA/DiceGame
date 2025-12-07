var randomNumber1 = Math.random();
randomNumber1 = Math.round(randomNumber1 * 6 ) + 1;

var randomDiceImge1 = "dice" + randomNumber1 + ".png";
var randomImgSrc1 = "images/" + randomDiceImge1;
document.querySelectorAll("img")[0].setAttribute("src" ,randomImgSrc1);
//repeat for second image
var randomNumber2 = Math.random();
randomNumber2 = Math.round(randomNumber2 * 6 ) + 1;

var randomDiceImge2 = "dice" + randomNumber2 + ".png";
var randomImgSrc2 = "images/" + randomDiceImge2;
document.querySelectorAll("img")[1].setAttribute("src" ,randomImgSrc2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Palyer 1 won";
}
else if ( randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 won";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}
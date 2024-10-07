// changing img for player 1

var randomNumber1 = Math.floor(Math.random() * 6) + 1;  // generate random no.

var diceImage = "dice"+randomNumber1+".png";
var imageSource = "images/"+diceImage;

var image1 =document.querySelectorAll("img")[0];

image1.setAttribute("src",imageSource);

// changing img for player 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;  // generate random no.

var diceImage2 = "dice"+randomNumber2+".png";
var imageSource2 = "images/"+diceImage2;

var image2 =document.querySelectorAll("img")[1];

image2.setAttribute("src",imageSource2);


//player 1 wins
if(randomNumber1 >randomNumber2 ){
    document.querySelector("h1").innerHTML = "player 1 wins";
}

// player 2 wins
else if(randomNumber2 >randomNumber1 ){
    document.querySelector("h1").innerHTML = "player 2 wins";
}

//draw

else{
    document.querySelector("h1").innerHTML = "Draw";
}
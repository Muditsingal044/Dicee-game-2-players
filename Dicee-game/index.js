var randommath1=Math.floor((Math.random()*6)+1);
var randomdice1="images/dice"+randommath1+".png";
var image1=document.querySelectorAll("img")[0];   // tag querySelect
image1.setAttribute("src",randomdice1);


var randommath2=Math.floor((Math.random()*6)+1);
var randomdice2="images/dice"+randommath2+".png";
var image2=document.querySelectorAll("img")[1];   // tag querySelect
image2.setAttribute("src",randomdice2);


if (randommath1>randommath2){
  document.querySelector("h1").innerHTML="player 1 Wins";

} else if (randommath1<randommath2){
  document.querySelector("h1").innerHTML="player 2 wins";

}
else{
  document.querySelector("h1").innerHTML="Draw!";
}

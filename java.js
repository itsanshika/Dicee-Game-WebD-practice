var randonMunber1= Math.floor((Math.random() * 6)+1);
var randonMunber2= Math.floor((Math.random() * 6)+1);
var image="../images/dice"+randonMunber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",image);
var image2="../images/dice"+randonMunber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",image2);
if(randonMunber1>randonMunber2)
document.querySelector("h1").innerHTML="🎈Player1 Wins!";
else if(randonMunber1<randonMunber2)
document.querySelector("h1").innerHTML="🎈Player2 Wins!";
else
document.querySelector("h1").innerHTML="Throw it Again!";

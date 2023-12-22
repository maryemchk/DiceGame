var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage1="dice"+randomNumber1+".png";
var randomImageSource1="images/"+randomDiceImage1;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="dice"+randomNumber2+".png";
var randomImageSource2="images/"+randomDiceImage2;

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);












/*const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

console.log(randomNumber1);
console.log(randomNumber2);



var changeableIMG1=document.querySelector('.img1');
var changeableIMG2=document.querySelector('.img2');

switch (randomNumber1){
  case 1:
  changeableIMG1.setAttribute('src', 'images/dice1.png');
    break;
  case 2:
  changeableIMG1.setAttribute('src', 'images/dice2.png');
      break;
  case 3:
  changeableIMG1.setAttribute('src', 'images/dice3.png');
      break;
  case 4:
  changeableIMG1.setAttribute('src', 'images/dice4.png');
      break;
  case 5:
  changeableIMG1.setAttribute('src', 'images/dice5.png');
      break;
  case 6:
  changeableIMG1.setAttribute('src', 'images/dice6.png');
      break;
  default:
  console.log("error");
}
switch (randomNumber2){
  case 1:
  changeableIMG2.setAttribute('src', 'images/dice1.png');
    break;
  case 2:
  changeableIMG2.setAttribute('src', 'images/dice2.png');
      break;
  case 3:
  changeableIMG2.setAttribute('src', 'images/dice3.png');
      break;
  case 4:
  changeableIMG2.setAttribute('src', 'images/dice4.png');
      break;
  case 5:
  changeableIMG2.setAttribute('src', 'images/dice5.png');
      break;
  case 6:
  changeableIMG2.setAttribute('src', 'images/dice6.png');
      break;
  default:
  console.log("error");
}*/

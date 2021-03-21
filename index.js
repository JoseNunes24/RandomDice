if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {

  var firstResult = diceImage(getDiceResult());
  var secondResult = diceImage(getDiceResult());

  document.querySelectorAll("img")[0].setAttribute("src", firstResult);
  document.querySelectorAll("img")[1].setAttribute("src", secondResult);

  if (firstResult > secondResult) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (firstResult < secondResult) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}



} else {


  document.querySelectorAll("img")[0].setAttribute("src", "images/dice6.png");
  document.querySelectorAll("img")[1].setAttribute("src", "images/dice6.png");


}

function getDiceResult() {
  return Math.floor(Math.random() * 6 ) + 1;
}

function diceImage(diceResult) {
	switch (diceResult) {
		case 1:
			return "images/dice1.png";
			break;
		case 2:
			return "images/dice2.png";
			break;
		case 3:
			return "images/dice3.png";
			break;
		case 4:
			return "images/dice4.png";
			break;
		case 5:
			return "images/dice5.png";
			break;
		case 6:
			return "images/dice6.png";
			break;
	}
}
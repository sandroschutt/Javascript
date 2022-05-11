let player1 = "X";
let player2 = "O";

let lastPlay = player2;

function setPosition(event) {
  if (lastPlay == player2) {
    if (event.target.getAttribute("value") != "clicked") {
      event.target.setAttribute("value", "clicked");
      let p = (event.target.innerHTML = player1);
      lastPlay = player1;
    } else {
      alert("Esta posição já foi selecionada!");
    }
  } else {
    if (event.target.getAttribute("value") != "clicked") {
      event.target.setAttribute("value", "clicked");
      let p = (event.target.innerHTML = player2);
      lastPlay = player2;
    } else {
      alert("Esta posição já foi selecionada!");
    }
  }
}

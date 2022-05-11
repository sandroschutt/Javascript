let player1 = "X";
let player2 = "O";

let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");
let p5 = document.getElementById("p5");
let p6 = document.getElementById("p6");
let p7 = document.getElementById("p7");
let p8 = document.getElementById("p8");
let p9 = document.getElementById("p9");

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

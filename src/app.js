/* eslint-disable */
import "./style.css";

let who = ["El perro", "Mi abuela", "Elon Musk", "Britney"];
let action = ["se comió", "orinó en", "mató", "rompió"];
let what = ["el internet", "mi ordenador", "mi proyecto"];
let when = [
  "antes de la clase",
  "en el peor momento",
  "mientras comía",
  "mientras rezaba"
];

function generarExcusa() {
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
}

function actualizarExcusa() {
  let excuse = generarExcusa();
  document.getElementById("excuse").textContent = excuse;
}

document.getElementById("boton-generar").addEventListener("click", function() {
  actualizarExcusa();
});

window.onload = function() {
  actualizarExcusa();
};

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("action-btn");
  if (!button) return;

  button.addEventListener("click", () => {
    alert("Mahe Guessr starter template is ready!");
  });
});



var GameStart = false;
var startButton = document.getElementById("start");

function StartGame() {
  if (!GameStart) {
    document.getElementById("left").style.display = "none";
    document.getElementById("right").style.display = "none";
  } else {
    document.getElementById("left").style.display = "";
    document.getElementById("right").style.display = "";
    document.getElementById("startScreen").style.display = "none";
    map.invalidateSize()
  }
}

StartGame();

startButton.addEventListener("click", (e) => {
  GameStart = !GameStart;
  StartGame();
});
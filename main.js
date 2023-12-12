var score = 10;
function increase() {
    score=score-20;
    document.getElementById("zero").textContent=score;
}
function decrease() {
    score = score+20;
    document.getElementById("zero").textContent=score;
}

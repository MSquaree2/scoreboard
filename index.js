let homeEl = document.getElementById("score-home")
let awayEl = document.getElementById("score-away")

let scoreHome = 0
let scoreAway = 0

function add1PointHome() {
    scoreHome += 1
    homeEl.textContent = scoreHome
}

function add2PointHome() {
    scoreHome += 2
    homeEl.textContent = scoreHome
}

function add3PointHome() {
    scoreHome += 3
    homeEl.textContent = scoreHome
}

function add1PointAway() {
    scoreAway += 1
    awayEl.textContent = scoreAway
}

function add2PointAway() {
    scoreAway += 2
    awayEl.textContent = scoreAway
}

function add3PointAway() {
    scoreAway += 3
    awayEl.textContent = scoreAway
}

function gameStart() {
    homeEl.textContent = 0
    awayEl.textContent = 0
}
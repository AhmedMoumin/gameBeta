let score = 0
let oldScore = 0
document.addEventListener("DOMContentLoaded", ()=>{document.getElementById("start").showModal()})
document.addEventListener("mousemove", (e)=> {
     let curX = e.clientX;

     let lineY = document.getElementById("lineY");
     let lineX = document.getElementById("lineX")
     let curY = e.clientY;
     let coord = document.getElementById("coord")
     
      coord.style.transform = `translateX(${curX}px)`
     lineY.style.transform = `translateY(${curY-45}px)`
     coord.style.transform = `translateY(${curY}px)`
     lineX.style.transform = `translateX(${curX}px)`


     coord.innerHTML = `coordinates:${curX +";"+ curY}`
})


function clickButton() {

  score = score + 1
  oldScore = score - 1
  console.log(score,oldScore)
  document.getElementById("score").innerHTML = +score

  
  let body = document.getElementById("hit");
  body.style.transition = "ease-in-out 50ms"
  let Xcoord = Math.floor(Math.random() * 1520); // Coordonnée X entre 0 et 199
  let Ycoord = Math.floor(Math.random() * 530); // Coordonnée Y entre 0 et 199
  body.style.transform = `translate(${Xcoord}px, ${Ycoord}px)`; // Appliquer les deux transformations ensemble

  let pointScore = new Audio("./sounds/pointSoundEffect.mp3")
  pointScore.play()
}
function lose() {
  oldScore = oldScore + 1
}

function timerStart() {
  let timer1 = Number(localStorage.getItem("TIMER"));
  let timer = document.getElementById("timer")
 x = setInterval(() => {
    timer1 = timer1 - 1;
    timer.innerHTML = ` <img src="https://cdn-icons-png.flaticon.com/128/1842/1842869.png" alt="timer" height="20px"> `+timer1+`s !`
    if (timer1 <= 0) {
      document.getElementById("win").showModal()
    }else if(timer1 <= 5){
      let lateSound = new Audio('./sounds/lateGame.mp3')
      lateSound.play()
    }
  }, 1000);
}

function start() {
  document.getElementById("start").showModal();
  let startMusic = new Audio('./sounds/startSound.mp3')
  startMusic.play()
  setTimeout(() => {
    document.getElementById("countdown").innerHTML = "2..."
  }, 1000);
  setTimeout(() => {
    document.getElementById("countdown").innerHTML = "1..."
  }, 2000);
  setTimeout(() => {
    document.getElementById("countdown").innerHTML = "GO!"
    document.getElementById("start").close()
    timerStart()
    document.getElementById("html").style = "cursor:none;"
  }, 3000);
}
function startbtnClick() {
  let btnClick = new Audio("./sounds/btnPress.mp3")
  btnClick.play()
  document.getElementById("game").showModal()
}

function a() {
  localStorage.setItem("TIMER","30")
  let btnClick = new Audio("./sounds/btnPress.mp3")
  btnClick.play()
  location.href = "./game.html"
}
function s() {
  localStorage.setItem("TIMER","60")
  let btnClick = new Audio("./sounds/btnPress.mp3")
  btnClick.play()
  location.href = "./game.html"
}
function d() {
  localStorage.setItem("TIMER","120")
  let btnClick = new Audio("./sounds/btnPress.mp3")
  btnClick.play()
  location.href = "./game.html"
}
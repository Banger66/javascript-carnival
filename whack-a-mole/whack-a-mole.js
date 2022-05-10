// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

// Game Code

console.log('Whack-a-Mole!')

// Create mole
let mole = document.createElement('img')
mole.src = 'mole.PNG'
//Make mole.PNG same size as cell
mole.style.width = '100%'
mole.style.height = '100%'

//Add stupid sound effect
let sound = new Audio('whack-audio.wav')

//Give value for clicks(used as a Moles Whacked counter)
let clicks = 0

//Start timer at 10 seconds, display time next to time left div, reduce countdown function by 1 every 1000ms
let timeLeft = 10
let timer = document.getElementById('timer')
let timerID = setInterval(countdown, 1000)

function showMole() {
  //Create variable to store cells
  let cells = document.getElementsByTagName('td')
  //Create random number between 0-24 (25 numbers in total)
  let randomIndex = Math.floor(Math.random() * 24)
  //Show the mole in a random cell
  let randomCell = cells[randomIndex]
  randomCell.appendChild(mole)
}
showMole()

// When mole gets clicked on, remove mole, play sound effect, then run showMole to respawn mole
mole.onclick = function whackedMole() {
  mole.remove()
  sound.play()
  showMole()
  //Add 1 to clicks and display value next to Moles Whacked
  clicks += 1
  document.getElementById('counter').innerHTML = clicks
}

//Countdown timer function
function countdown() {
  //If timer gets to 0, clear timer and give alert
  if (timeLeft == -1) {
    clearTimeout(timerID)
    alert('Times Up! You whacked ' + clicks + ' Moles!')
    //display timeleft in timer and reduce by 1
  } else {
    timer.innerHTML = timeLeft
    timeLeft--
  }
}

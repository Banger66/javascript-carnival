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

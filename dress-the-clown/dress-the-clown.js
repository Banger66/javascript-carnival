// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

let headIndex = 0

//Change head
function changeClownHead() {
  let head = document.getElementById('head')
  let headSrc = './images/head' + headIndex + '.png'
  head.src = headSrc
}

changeClownHead()

document.onkeydown = checkKey

function checkKey(e) {
  e = e || window.event

  if (e.code == 'ArrowUp') {
    // up arrow
  } else if (e.code == 'ArrowDown') {
    // down arrow
  } else if (e.code == 'ArrowLeft') {
    if (headIndex == 0) {
      headIndex = 5
    }
    headIndex--
    changeClownHead()
  } else if (e.code == 'ArrowRight') {
    headIndex++
    changeClownHead()
    if (headIndex == 5) {
      headIndex = 0
    }
  }
}

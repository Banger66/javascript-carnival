// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

//declare variables
let clothingIndex = 0
let headIndex = 0
//reference clown parts
let head = document.getElementById('head')
let body = document.getElementById('body')
let shoes = document.getElementById('shoes')
let text = document.getElementById('textDisplay')

function changeClothes() {
  //selects what part to change
  if (clothingIndex == 0) {
    clothingOption = head
    clothingSlot = 'head'
  } else if (clothingIndex == 1) {
    clothingOption = body
    clothingSlot = 'body'
  } else if (clothingIndex == 2) {
    clothingOption = shoes
    clothingSlot = 'shoes'
  }
  //changes image
  let clothesSrc = './images/' + clothingSlot + headIndex + '.png'
  clothingOption.src = clothesSrc
}

//arrow key controls
document.onkeydown = checkKey

function checkKey(e) {
  e = e || window.event

  if (e.code == 'ArrowUp') {
    if (clothingIndex == 0) {
      clothingIndex = 3
    }
    clothingIndex--
    //lets user know what id being changed
    if (clothingIndex == 0) {
      text.innerHTML = 'Head'
    } else if (clothingIndex == 1) {
      text.innerHTML = 'Body'
    } else if (clothingIndex == 2) {
      text.innerHTML = 'Shoes'
    }
  } else if (e.code == 'ArrowDown') {
    clothingIndex++
    if (clothingIndex == 3) {
      clothingIndex = 0
    }
    //lets user know what id being changed
    if (clothingIndex == 0) {
      text.innerHTML = 'Head'
    } else if (clothingIndex == 1) {
      text.innerHTML = 'Body'
    } else if (clothingIndex == 2) {
      text.innerHTML = 'Shoes'
    }
  } else if (e.code == 'ArrowLeft') {
    if (headIndex == 0) {
      headIndex = 6
    }
    headIndex--
    changeClothes()
  } else if (e.code == 'ArrowRight') {
    headIndex++
    if (headIndex == 6) {
      headIndex = 0
    }

    changeClothes()
  }
}

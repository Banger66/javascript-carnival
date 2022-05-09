// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

let inflate = document.getElementsByClassName('inflate-an-image')

// Make clicking on a unicorn call the inflateClicked() function

for (let i = 0; i < inflate.length; i++) {
  inflate[i].onclick = inflateClicked
}

// If image source = unicorn-0, change source to unicorn-1 etc up to unicorn 3

function inflateClicked(e) {
  let uni = e.target
  console.log(inflate)
  if (uni.src.match('unicorn-0.png')) {
    uni.src = './images/unicorn-1.png'
  } else if (uni.src.match('unicorn-1.png')) {
    uni.src = 'images/unicorn-2.png'
  } else if (uni.src.match('unicorn-2.png')) {
    uni.src = 'images/unicorn-3.png'
  } else if (uni.src.match('unicorn-3.png')) {
    alert('The Unicorn says Thank You!')
  }
}

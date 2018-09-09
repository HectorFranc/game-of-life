// Create HTML elements for gridgame and putted it in the element #gridgame
document.getElementById('gridgame').innerHTML = ('<div class="rowgrid">' + '<div class="cellgrid" onclick="colorate(this)"></div>'.repeat(Math.floor(window.innerWidth / 30)) + '</div>').repeat(Math.floor(window.innerHeight / 30))

// Function that put color to the element argument, this function is used for decide if some cell is black or white
function colorate (element) {
  if (element.style.backgroundColor === 'rgb(0, 0, 0)') {
    element.style.backgroundColor = '#fff'
  } else {
    element.style.backgroundColor = '#000'
  }
}

// Appear and disappear start button using 'q' key
document.getElementById('startbutton').style.display = 'block'
document.addEventListener('keyup', (e) => {
  if (e.key === 'q') {
    if (document.getElementById('startbutton').style.display === 'none') {
      document.getElementById('startbutton').style.display = 'block'
    } else if (document.getElementById('startbutton').style.display === 'block') {
      document.getElementById('startbutton').style.display = 'none'
    }
  }
})

// Star game, eliminate notice using 's' key
document.addEventListener('keyup', (e) => {
  if (e.key === 's') {
    document.getElementById('notice').style.display = 'none'
  }
})

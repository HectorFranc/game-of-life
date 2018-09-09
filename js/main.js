for (let y = 0; y < Math.floor(window.innerHeight / 30); y++) {
  document.getElementById('gridgame').innerHTML += '<div class="rowgrid">'
  for (let x = 0; x < Math.floor(window.innerWidth / 30); x++) {
    document.getElementById('gridgame').innerHTML += '<div class="cellgrid" onclick="colorate(this)"></div>'
  }
  document.getElementById('gridgame').innerHTML += '<div/>'
}

function colorate (element) {
  if (element.style.backgroundColor === 'rgb(0, 0, 0)') {
    element.style.backgroundColor = '#fff'
  } else {
    element.style.backgroundColor = '#000'
  }
}

// Appear and disappear start button
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

// Star game, eliminate notice
document.addEventListener('keyup', (e) => {
  if (e.key === 's') {
    document.getElementById('notice').style.display = 'none'
  }
})

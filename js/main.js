var numColumns = Math.floor(window.innerWidth / 30)
var numRows = Math.floor(window.innerHeight / 30)

// Create HTML elements for gridgame and putted it in the element #gridgame
document.getElementById('gridgame').innerHTML = ('<div class="rowgrid">' + '<div class="cellgrid" onclick="colorate(this)"></div>'.repeat(numColumns) + '</div>').repeat(numRows)

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
    document.getElementById('startbutton').style.display = 'block'
  }
})

/* --------------------------
  -- Logic program --
----------------------------- */
function calculateAllNeighbors (liveSystem, row, column) {
  let neighbors = [liveSystem[row][column], liveSystem[row][column], liveSystem[row][column], liveSystem[row][column], liveSystem[row][column], liveSystem[row][column], liveSystem[row][column], liveSystem[row][column]] 
  let neighborsTotal = 0;
  for (let i = 0; i < neighbors.length; i++) {
    neighborsTotal += neighbors[i]
  }
  return neighborsTotal
}

function calculateNextGeneration (after) {
  var before = []
  for (let row = 0; row < after.length; row++) {
    for (let column = 0; column < after[row].length; column++) {
      if (after[row][column]) {
        // live
      } else {
        let neighborLive = calculateAllNeighbors(after, row, column)
        if (neighborLive === 3) {
          before[row][column] = 1
        } else {
          before[row][column] = 0
        }
      }
    }
  }
  return before
}

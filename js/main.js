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
  // This function takes an array that represents a liveSystem, and the row and column of the cell that we want to now how many neighbors does it has. It creates neighbors, neighbors saves in each index every cell neighbor value, for every neighbor row it verifies if it's not undefined, and if it's not it push every neighbor cell to neighbors. Next it creates neighborsTotal, it saves how many neighbors does the cell has, for each neighbor if it's 1 we add one to neighborsTotal, finally, we return neighborsTotal

  let neighbors = []

  if (liveSystem[row - 1] !== undefined) {
    neighbors.push(liveSystem[row - 1][column - 1], liveSystem[row - 1][column], liveSystem[row - 1][column + 1])
  }
  if (liveSystem[row] !== undefined) {
    neighbors.push(liveSystem[row][column - 1], liveSystem[row][column + 1])
  }
  if (liveSystem[row + 1] !== undefined) {
    neighbors.push(liveSystem[row + 1][column - 1], liveSystem[row + 1][column], liveSystem[row + 1][column + 1])
  }

  let neighborsTotal = 0
  neighbors.forEach((e) => {
    if (e === 1) {
      neighborsTotal += 1
    }
  })

  return neighborsTotal
}

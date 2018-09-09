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

function calculateNextGeneration (before) {
  // This function takes a live system and returns its next generation. First it creates after like before but without values (empty). Next for each row of the liveSystem checks each cell and if the cell is live and has 2 or 3 neighbors will live, else will die, if the cell is died and has 3 neighbors will live, else will died. Finally returns next Generation saved on after
  
  let after = []
  for (let row = 0; row < before.length; row++) {
    after.push(new Array(before[row].length))
  }

  before.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      if (cell) {
        // Live
        if (calculateAllNeighbors(before, rowIndex, cellIndex) === 2 || calculateAllNeighbors(before, rowIndex, cellIndex) === 3) {
          after[rowIndex][cellIndex] = 1
        } else {
          after[rowIndex][cellIndex] = 0
        }
      } else {
        // Died
        if (calculateAllNeighbors(before, rowIndex, cellIndex) === 3) {
          after[rowIndex][cellIndex] = 1
        } else {
          after[rowIndex][cellIndex] = 0
        }
      }
    })
  })
  return after
}

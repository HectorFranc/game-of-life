function changeLenguage (toLanguage) {
  if (toLanguage === 'es') {
    document.getElementById('english-notice').style.display = 'none'
    document.getElementById('spanish-notice').style.display = 'block'
    document.getElementById('startbutton').innerHTML = 'Siguiente generación'
    document.getElementById('automaticButton').innerHTML = 'Automático'
    document.getElementById('pauseButton').innerHTML = 'Pausa'
    document.getElementById('startGameOfLifeButton').innerHTML = 'Iniciar Juego De La Vida'
    document.head.getElementsByTagName('title')[0].innerHTML = 'El Juego De La vida'
  } else {
    document.getElementById('english-notice').style.display = 'block'
    document.getElementById('spanish-notice').style.display = 'none'
    document.getElementById('startbutton').innerHTML = 'Next generation'
    document.getElementById('automaticButton').innerHTML = 'Auto'
    document.getElementById('pauseButton').innerHTML = 'Pause'
    document.getElementById('startGameOfLifeButton').innerHTML = 'Start Game Of Life'
    document.head.getElementsByTagName('title')[0].innerHTML = 'Game Of Life'
  }
}

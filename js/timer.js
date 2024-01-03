import sounds from "./sounds.js"
//essa minha factory pra injeção dependência
//foi feito injeção de dependencias aqui ness factory
export default function Timer({ 
  minutesDisplay, 
  secondsDisplay,    
  resetControls,
  
}) {

  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

function updateDisplay(newMinutes, seconds) {
  //textcontent alterar com valor dado prompt
  //padStart preenche caracteres no inicio de uma string, no caso eu preenchi com 0
  newMinutes = newMinutes === undefined ? minutes : newMinutes
  seconds = seconds === undefined ? 0 : seconds
  minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function reset() {
  updateDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function countdown(){
  timerTimeOut = setTimeout(function() {
    let seconds =  Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    let isFinished = minutes <= 0 && seconds <= 0
    updateDisplay(minutes, 0)

    if (isFinished) {
      resetControls()
      updateDisplay()
      sounds().timeEnd()
      return
    }

    if( seconds <= 0 ) {
      seconds = 60
      --minutes
    }
    updateDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}


function updateMinutes(newMinutes) {
  minutes = newMinutes
}
//segura o tempo
function hold() {
  clearTimeout(timerTimeOut)
 
}

return {
  countdown,
  reset,
  updateDisplay,
  updateMinutes,
  hold
}
}

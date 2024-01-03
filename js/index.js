// default import(pode usar qualquer nome)
import Controls from "./controls.js"
// named import
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import {
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js"


//EcmaScript - 2015 ES6 Modules
//DOM
//Document object Model modelagem do HTML com script
// refatoração é mudar código pra deixa mais entendivel, limpo, performatico sem alterar funcionalidade

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
})
//injeção de dependencias
const timer = Timer({
  minutesDisplay, 
  secondsDisplay, 
  resetControls: controls.reset
})
const sound = Sound()

Events({controls, timer, sound})
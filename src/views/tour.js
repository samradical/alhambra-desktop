var html = require('choo/html')
import { ALHAMBRA } from '../locations'
import Sound from './Sound'

function Tour(state, prev, send) {


  const prevLocation = !!prev ? prev.activeLocation : -1;
  if (prevLocation !== state.activeLocation) {
    //CHANGE THE ALHAMBRA APP
    setTimeout(() => {
      Sound.updateMap({
        latitude: ALHAMBRA[state.activeLocation].latitude,
        longitude: ALHAMBRA[state.activeLocation].longitude
      })
    }, 3000)
  }


  return html `
  <div></div>
  `
}

module.exports = Tour

var html = require("choo/html")
import { ALHAMBRA } from "../locations"
import Sound from "./sound"


function Tour(state, prev, send) {
  const prevLocation = !!prev ? prev.activeLocation : -1
  const allow = !!prev ? prev.allow : false

  if (!state.started && window.ALHAMBRA_API) {
    window.ALHAMBRA_API.start()
    Sound.updateMap({
      latitude: ALHAMBRA[state.activeLocation].latitude,
      longitude: ALHAMBRA[state.activeLocation].longitude,
    })
    send('started', true)
  }


  if (
    prevLocation!== state.activeLocation
  ) {

    Sound.updateMap({
      latitude: ALHAMBRA[state.activeLocation].latitude,
      longitude: ALHAMBRA[state.activeLocation].longitude,
    })
    /*//CHANGE THE ALHAMBRA APP
    setTimeout(() => {
      Sound.updateMap({
        latitude: ALHAMBRA[state.activeLocation].latitude,
        longitude: ALHAMBRA[state.activeLocation].longitude
      })
    }, 3000)*/
  }

  return html`
  <div></div>
  `
}

module.exports = Tour

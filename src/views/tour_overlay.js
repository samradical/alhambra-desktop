var html = require("choo/html")
import { Locations } from "../locations"
import Sound from "./sound"

const ASSETS_DIR =
  "https://storage.googleapis.com/samrad-alhambra/desktop/"

let ANIM_TO

function pad(num, size) {
  var s = num + ""
  while (s.length < size) s = "0" + s
  return s
}

function TourOverlay(state, prev, send) {
  const padVal = pad(state.activeLocation + 1, 2)
  let imgsrc = `${ASSETS_DIR}Location_${padVal}/location_${padVal}_${Locations[
    state.activeLocation
  ].name}.jpg`
  let soundsrc = `${ASSETS_DIR}Location_${padVal}/location_${padVal}-.mp3`

  const init = !!prev === false
  const prevLocation = !!prev ? prev.activeLocation : -1

  if (prevLocation !== state.activeLocation) {
    send("soundLoaded", false)
    send("allow", false)
    Sound.change(soundsrc, () => {
      send("soundLoaded", true)
    })

    let { timeCounter } = state
    imgsrc = ""
    clearTimeout(ANIM_TO)

    ANIM_TO = setInterval(function() {
      document.getElementById("alhambra-app").style.display = "none"
      timeCounter -= 100
      let imageClass = "image--visible"
      let markerClass = "marker--hidden"
      if (timeCounter < 3000 && timeCounter > 2000) {
        markerClass = "marker--visible"
      }

      if (timeCounter < 0) {
        send("soundLoaded", false)
        Sound.stop()
        clearTimeout(ANIM_TO)
        imageClass = "image--hidden"
        if (init && window.ALHAMBRA_API) {
          setTimeout(()=>{
            send("allow", true)
          },3000)
        }
        document.getElementById("alhambra-app").style.display =
          "block"
      } else {
        send("timeCounter", timeCounter)
      }

      send("introAnimationUpdate", { markerClass, imageClass })
    }, 100)
  }

  const left = (state.map.width - state.map.alhambraAppWidth) / 2
  const top = (state.map.height - state.map.alhambraAppWidth) / 2

  const markerUrl = `map-marker-small.svg?`
  const { markerClass, imageClass } = state.introAnimation
  return html`
    <div class="tour--overlay" style="width: ${state.map
      .alhambraAppWidth}px; height: ${state.map
    .alhambraAppHeight}px; left: ${left}px; top:${top}px;">
      <img class="tour--overlay--image ${imageClass}" src=${imgsrc}></img>
      <img class="tour--overlay--image ${markerClass}" src=${ASSETS_DIR}${markerUrl}></img>
    </div>

  `
}

module.exports = TourOverlay

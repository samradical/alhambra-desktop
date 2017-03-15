var html = require('choo/html')

function MapMarker(state, prev, send) {


  const style = `
  left: ${state.x}%; top: ${state.y}%;
  `
  const clazz = state.activeLocation === state.index ? "map--active" : "";

  function mapMarkerClicked() {
    send('mapMarkerClicked', state)
  }

  return html `
        <div class="map__marker ${clazz}" style="${style}"
          onclick=${mapMarkerClicked}
        >

        </div>
  `
}

module.exports = MapMarker

var html = require('choo/html')
function MapMarker (state, prev, send) {


  const style = `
  left: ${state.x}%; top: ${state.y}%;
  `
  const clazz = state.activeLocation === state.index ? "map--active" : "";

  return html`
        <div class="map__marker ${clazz}" style="${style}" >

        </div>
  `
}

module.exports = MapMarker
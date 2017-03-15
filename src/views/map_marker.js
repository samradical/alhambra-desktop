var html = require('choo/html')
function MapMarker (state, prev, send) {


  const style = `
  left: ${state.x}%; top: ${state.y}%;
  `


  return html`
        <div class="map--marker" style="${style}">
        </div>
  `
}

module.exports = MapMarker
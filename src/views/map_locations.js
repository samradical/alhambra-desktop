var html = require('choo/html')
var mapMarkerView = require('./map_marker')
function MapLocations (state, prev, send) {

  const {MapPositions} = state.locations;

  const markers = MapPositions.map(l => (mapMarkerView(l, prev, send)))

  return html`
        <div class="map--locations">
          ${markers}
        </div>
  `
}

module.exports = MapLocations
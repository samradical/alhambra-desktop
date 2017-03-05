var html = require('choo/html')
function Map (state, prev, send) {
  return html`
        <img class="map--image" src="/assets/map.svg">
  `
}

module.exports = Map
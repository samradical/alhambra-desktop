var html = require('choo/html')
function Map (state, prev, send) {

  const rotation = `
  transform:rotate(${state.rotation}deg) translateX(${state.left}%) translateY(${state.top}%);
  -webkit-transform:rotate(${state.rotation}deg) translateX(${state.left}%) translateY(${state.top}%);`
  return html`
        <div class="pinwheel--image" style="${rotation}">
          <img src="assets/pinwheel.svg">
        </div>
  `
}

module.exports = Map
var html = require('choo/html')

function Map (state, prev, send) {

  const rotation = `
  transform:rotate(${state.rotation}deg) translateX(${state.left}%) translateY(${state.top}%);
  -webkit-transform:rotate(${state.rotation}deg) translateX(${state.left}%) translateY(${state.top}%);`

  const clazz = state.activeLocation === state.index ? "pinwheel--active" : "";



  return html`
        <div class="pinwheel__image ${clazz}" style="${rotation}">
          <img src="assets/pinwheel.svg">
        </div>
  `
}

module.exports = Map
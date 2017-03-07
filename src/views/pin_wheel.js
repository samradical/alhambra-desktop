var html = require('choo/html')
function Map (state, prev, send) {

  const rotation = `transform:rotate(${state.rotation}deg);-webkit-transform:rotate(${state.rotation}deg);`
  console.log(rotation);
  return html`
        <div class="pinwheel--image" style="${rotation}"></div>
  `
}

module.exports = Map